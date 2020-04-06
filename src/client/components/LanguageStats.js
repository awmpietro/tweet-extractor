import React from 'react';
import { Table, CardTitle } from 'reactstrap';
import PropTypes from 'prop-types';

const LanguageStats = ({stats}) => {

    const renderLanguages = () => {
        const languages = []
        for(let i in stats.languages){
            languages.push(
            <tr key={i}>
                <td>{i}</td>
                <td>{stats.languages[i]}</td>
            </tr>
            )
        }
        return languages;
    }

    return(
        <>
        <CardTitle><h4>Tweets by language</h4></CardTitle>
        <Table bordered striped>
            <thead>
            <tr>
                <th>Language</th>
                <th>Quantity</th>
            </tr>
            </thead>
            <tbody>
            {renderLanguages()}
            </tbody>
        </Table>
        </>
    )
}

LanguageStats.propTypes = {
    stats: PropTypes.object
};

export default LanguageStats;