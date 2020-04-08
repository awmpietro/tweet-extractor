import React from 'react';
import { Table, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

const HashtagStats = ({ stats }) => {
  const renderHashtags = () => {
    const hashtags = [];
    for (let i in stats.hashtags) {
      hashtags.push(
        <tr key={i}>
          <td>{i}</td>
          <td>{stats.hashtags[i]}</td>
        </tr>,
      );
    }
    return hashtags;
  };

  return (
    <>
      <CardTitle>
        <h4>Tweets by hashtags</h4>
      </CardTitle>
      <Table bordered striped>
        <thead>
          <tr>
            <th>Hashtag</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>{renderHashtags()}</tbody>
      </Table>
    </>
  );
};

HashtagStats.propTypes = {
  stats: PropTypes.object,
};

export default HashtagStats;
