import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const StargazerCount = ({ count, verbose }) => {
  return (
    <div className='topic__metrics'>
      <FontAwesomeIcon className='metric__icon' icon={faStar} />
      {verbose && <b className='metric__title'>Stargazers:</b>}
      <span>{count}</span>
    </div>
  );
};

StargazerCount.propTypes = {
  count: PropTypes.number.isRequired,
  verbose: PropTypes.bool.isRequired,
};

StargazerCount.defaultProps = {
  verbose: false,
};

export default StargazerCount;
