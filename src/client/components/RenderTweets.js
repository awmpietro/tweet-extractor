import React, { useState } from 'react';
import {
  Row,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
} from 'reactstrap';
import TweetBox from './TweetBox';

const RenderTweets = ({ results }) => {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePage = (e, index) => {
    e.preventDefault();
    setCurrentPage(index);
  };

  if (results.length === 0) {
    return null;
  }
  const pageSize = 12;
  const pagesCount = Math.ceil(results.length / pageSize);
  return (
    <>
      <Row>
        {results
          .slice(currentPage * pageSize, (currentPage + 1) * pageSize)
          .map((data, i) => (
            <TweetBox result={data} key={data.id_str} />
          ))}
      </Row>
      <Row className="mt-5">
        <Col md="12" lg="12" xs="12" sm="12">
          <Pagination aria-label="Page navigation example">
            <PaginationItem disabled={currentPage <= 0}>
              <PaginationLink
                onClick={(e) => handlePage(e, currentPage - 1)}
                previous
                href="#"
              />
            </PaginationItem>
            {[...Array(pagesCount)].map((page, i) => (
              <PaginationItem active={i === currentPage} key={i}>
                <PaginationLink onClick={(e) => handlePage(e, i)} href="#">
                  {i + 1}
                </PaginationLink>
              </PaginationItem>
            ))}
            <PaginationItem disabled={currentPage >= pagesCount - 1}>
              <PaginationLink
                onClick={(e) => handlePage(e, currentPage + 1)}
                next
                href="#"
              />
            </PaginationItem>
          </Pagination>
        </Col>
      </Row>
    </>
  );
};

export default RenderTweets;
