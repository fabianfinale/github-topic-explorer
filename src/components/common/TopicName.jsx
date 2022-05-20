import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import { QueryContext } from '../../utils/context';

const TopicName = ({ name }) => {
  const { setQuery } = useContext(QueryContext);

  return (
    <button
      className='btn btn--link topic__name'
      onClick={() => setQuery(name)}>
      <FontAwesomeIcon
        className='topic__icon'
        icon={faGithubSquare}
        size='2x'
      />
      <span>{name}</span>
    </button>
  );
};

TopicName.propTypes = {
  name: PropTypes.string.isRequired,
};

export default TopicName;
