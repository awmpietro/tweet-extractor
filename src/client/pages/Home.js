import React, { useState } from 'react';
import {
  Container,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Row,
  Col,
  Alert,
} from 'reactstrap';
import classnames from 'classnames';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Spin from '../components/Spin/Spin';
import RenderTweets from '../components/RenderTweets';
import LanguageStats from '../components/LanguageStats';
import HashtagStats from '../components/HashtagStats';
import UserLocationStats from '../components/UserLocationStats';
import DateStats from '../components/DateStats';
import GeneralStats from '../components/GeneralStats';
import CsvFormatter from '../components/CsvFormatter';

import useInput from '../hooks/useInput';

import '../assets/style.css';

export default function Home() {
  const [activeTab, setActiveTab] = useState('1');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [stats, setStats] = useState({});
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const { value, bind, reset } = useInput('');

  const toggleTab = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.post(process.env.REACT_APP_API_URL, {
        data: value,
      });
      setResults(res.data.data);
      setStats(res.data.stats);
      reset();
      setLoading(false);
    } catch (error) {
      setErrorMsg(error.response.data);
      setIsError(true);
      setLoading(false);
    }
  };

  if (!loading) {
    return (
      <Container style={{ paddingTop: 50 }}>
        <Row>
          <Col sm="12">
            <h1>
              Tweet <small> Extractor</small>
            </h1>
          </Col>
        </Row>
        <hr />
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: activeTab === '1' })}
              onClick={() => {
                toggleTab('1');
              }}
            >
              Search
            </NavLink>
          </NavItem>
          {results.length > 0 ? (
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === '2' })}
                onClick={() => {
                  toggleTab('2');
                }}
              >
                Statistics
              </NavLink>
            </NavItem>
          ) : null}
        </Nav>
        <TabContent activeTab={activeTab}>
          <TabPane tabId="1">
            <Row className="mt-3">
              <Col sm="12">
                <form onSubmit={handleSubmit}>
                  <Row>
                    <Col sm="10">
                      <div className="form-group">
                        <input
                          className="form-control form-control-lg"
                          type="text"
                          placeholder="Enter search terms comma separated"
                          {...bind}
                          required
                        />
                      </div>
                    </Col>
                    <Col sm="2" className="text-right">
                      <div className="form-group">
                        <button
                          type="submit"
                          className="btn btn-lg btn-primary"
                          id="search-btn"
                        >
                          <FontAwesomeIcon color="#fff" icon={faSearch} />{' '}
                          Search
                        </button>
                      </div>
                    </Col>
                  </Row>
                </form>
              </Col>
            </Row>
            {results.length > 0 ? (
              <Row>
                <Col sm="12">
                  <CsvFormatter results={results} />
                </Col>
                <Col sm="12">
                  <hr />
                </Col>
              </Row>
            ) : null}
            <RenderTweets results={results} />
          </TabPane>
          {results.length > 0 ? (
            <TabPane tabId="2">
              <Row className="mt-3">
                <Col md={12} lg={12} xs={12}>
                  <Card>
                    <Card body>
                      <DateStats stats={stats} />
                      <hr />
                      <LanguageStats stats={stats} />
                      <hr />
                      <HashtagStats stats={stats} />
                      <hr />
                      <UserLocationStats stats={stats} />
                      <hr />
                      <GeneralStats stats={stats} />
                    </Card>
                  </Card>
                </Col>
              </Row>
            </TabPane>
          ) : null}
        </TabContent>
        <Alert color="danger" isOpen={isError} toggle={() => setIsError(false)}>
          {errorMsg}
        </Alert>
      </Container>
    );
  }
  return <Spin />;
}
