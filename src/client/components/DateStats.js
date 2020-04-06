import React from 'react';
import { Table, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

const DateStats = ({stats}) => {

    const renderDates = () => {
        const dates = []
        for(let i in stats.dates){
          dates.push(
            <tr key={i}>
              <td>{i}</td>
              <td>{stats.dates[i]}</td>
            </tr>
          )
        }
        return dates;
    }

    return(
        <>
          <CardTitle><h4>Tweets by date</h4></CardTitle>
          <Table bordered striped>
            <thead>
              <tr>
                <th>Date</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {renderDates()}
            </tbody>
          </Table>
        </>
    )
}

DateStats.propTypes = {
    stats: PropTypes.object
};

export default DateStats;