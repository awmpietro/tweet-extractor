import React from 'react';
import { Table, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

const UserLocationStats = ({stats}) => {

    const renderUserLocations = () => {
        const user_location = []
        for(let i in stats.user_location){
          user_location.push(
            <tr key={i}>
              <td>{i === "" ? "Undefined" : i}</td>
              <td>{stats.user_location[i]}</td>
            </tr>
          )
        }
        return user_location;
    }

    return(
        <>
        <CardTitle><h4>User Locations</h4></CardTitle>
        <Table bordered striped>
            <thead>
            <tr>
                <th>Location</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {renderUserLocations()}
            </tbody>
        </Table>
        </>
    )
}

UserLocationStats.propTypes = {
    stats: PropTypes.object
};

export default UserLocationStats;