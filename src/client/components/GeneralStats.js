import React from 'react';
import { Table, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

const GeneralStats = ({ stats }) => {
  return (
    <>
      <CardTitle>
        <h4>General User Stats</h4>
      </CardTitle>
      <Table bordered striped>
        <thead>
          <tr>
            <th>Name</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Profile Use Background Image</td>
            <td>{stats.profile_use_background_image}</td>
          </tr>
          <tr>
            <td>Has Geo Enabled</td>
            <td>{stats.geo_enabled}</td>
          </tr>
          <tr>
            <td>Is Verified</td>
            <td>{stats.verified}</td>
          </tr>
          <tr>
            <td>Has Extended Profile</td>
            <td>{stats.has_extended_profile}</td>
          </tr>
          <tr>
            <td>Is Default Profile</td>
            <td>{stats.default_profile}</td>
          </tr>
          <tr>
            <td>Has Default Profile Image</td>
            <td>{stats.default_profile_image}</td>
          </tr>
          <tr>
            <td>Notifications Enabled</td>
            <td>{stats.notifications}</td>
          </tr>
        </tbody>
      </Table>
    </>
  );
};

GeneralStats.propTypes = {
  stats: PropTypes.object,
};

export default GeneralStats;
