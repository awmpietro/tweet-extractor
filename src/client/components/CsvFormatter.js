import React from 'react';
import PropTypes from 'prop-types';
import { CSVLink } from "react-csv";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFileCsv } from '@fortawesome/free-solid-svg-icons'

const CsvFormatter = ( {results} ) => {

    const renderHeader = () => {
        const headers = [
            { label: "created_at", key: "created_at" },
            { label: "id", key: "id_str" },
            { label: "text", key: "text" },
            { label: "truncated", key: "truncated" },
            { label: "metadata_iso_language_code", key: "metadata.iso_language_code" },
            { label: "metadata_result_type", key: "metadata.result_type" },
            { label: "source", key: "source" },
            { label: "user_name", key: "user.name" },
            { label: "user_location", key: "user.location" },
            { label: "user_description", key: "user.description" },
            { label: "user_protected", key: "user.protected" },
            { label: "user_followers_count", key: "user.followers_count" },
            { label: "user_friends_count", key: "user.friends_count" },
            { label: "user_listed_count", key: "user.listed_count" },
            { label: "user_created_at", key: "user.created_at" },
            { label: "user_favourites_count", key: "user.favourites_count" },
            { label: "user_utc_offset", key: "user.utc_offset" },
            { label: "user_time_zone", key: "user.time_zone" },
            { label: "user_geo_enabled", key: "user.geo_enabled" },
            { label: "user_verified", key: "user.verified" },
            { label: "user_statuses_count", key: "user.statuses_count" },
            { label: "user_lang", key: "user.lang"},
            { label: "user_contributors_enabled", key: "user.contributors_enabled"},
            { label: "user_is_translator", key: "user.is_translator"},
            { label: "user_is_translation_enabled", key: "user.is_translation_enabled"},
            { label: "user_profile_background_color", key: "user.profile_background_color"},
            { label: "user_profile_background_image_url", key: "user.profile_background_image_url"},
            { label: "user_profile_background_image_url_https", key: "user.profile_background_image_url_https"},
            { label: "user_profile_background_tile", key: "user.profile_background_tile"},
            { label: "user_profile_image_url", key: "user.profile_image_url"},
            { label: "user_profile_image_url_https", key: "user.profile_image_url_https"},
            { label: "user_profile_banner_url", key: "user.profile_banner_url"},
            { label: "user_profile_link_color", key: "user.profile_link_color"},
            { label: "user_profile_sidebar_border_color", key: "user.profile_sidebar_border_color"},
            { label: "user_profile_sidebar_fill_color", key: "user.profile_sidebar_fill_color"},
            { label: "user_profile_text_color", key: "user.profile_text_color"},
            { label: "user_profile_use_background_image", key: "user.profile_use_background_image"},
            { label: "user_has_extended_profile", key: "user.has_extended_profile"},
            { label: "user_default_profile", key: "user.default_profile"},
            { label: "user_default_profile_image", key: "user.default_profile_image"},
            { label: "user_following", key: "user.following"},
            { label: "user_follow_request_sent", key: "user.follow_request_sent"},
            { label: "user_notifications", key: "user.notifications"},
            { label: "user_translator_type", key: "user.translator_type"},
            { label: "geo", key: "geo"},
            { label: "coordinates", key: "coordinates"},
            { label: "place", key: "place"},
            { label: "contributors", key: "contributors"},
            { label: "is_quote_status", key: "is_quote_status"},
            { label: "retweet_count", key: "retweet_count"},
            { label: "favorite_count", key: "favorite_count"},
            { label: "favorited", key: "favorited"},
            { label: "possibly_sensitive", key: "possibly_sensitive"},
            { label: "lang", key: "lang"}
        ];
        return headers;
    }
    
    return(
        <CSVLink
            data={results} 
            headers={renderHeader()}
            filename={"tweet-extractor.csv"}
            className="btn btn-success"
            target="_blank"
        >
            <FontAwesomeIcon color="#fff" icon={faFileCsv} /> Export CSV
        </CSVLink>
    )
}

CsvFormatter.propTypes = {
    results: PropTypes.array
};

export default CsvFormatter