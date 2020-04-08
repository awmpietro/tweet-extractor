import React from 'react';
import PropTypes from 'prop-types';
import { Col } from 'reactstrap';

const TweetBox = ({ result }) => {
  return (
    <Col md="4" className="bootstrap snippets">
      <div className="widget panel">
        <div className="panel-body">
          <ul className="list-table">
            <li style={{ width: 60 }}>
              <img
                className="img-circle mb-2"
                src={result.user.profile_image_url}
                alt=""
                width="55"
                height="55"
              />
            </li>
            <li className="text-left">
              <h4 className="semibold ellipsis nm">
                {result.user.screen_name}
              </h4>
              <p className="text-muted nm">
                {result.user.followers_count} followers
              </p>
            </li>
            <li className="text-right">
              <button
                type="button"
                className="btn btn-sm btn-info"
                onClick={() =>
                  window.open(
                    `https://twitter.com/i/web/status/${result.id_str}`,
                    '_blank',
                  )
                }
              >
                See
              </button>
            </li>
          </ul>
        </div>

        <ul className="list-group">
          <li className="list-group-item">
            <p className="nm">{result.text}</p>
            <small className="text-muted">{result.created_at}</small>
          </li>
        </ul>
      </div>
    </Col>
  );
};

TweetBox.propTypes = {
  result: PropTypes.object,
};

export default TweetBox;
