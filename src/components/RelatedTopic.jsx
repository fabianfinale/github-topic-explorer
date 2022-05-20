import React from 'react';
import PropTypes from 'prop-types';
import StargazerCount from './common/StargazerCount';
import TopicName from './common/TopicName';

const RelatedTopic = ({ topic }) => {
  return (
    <li className='related__topic'>
      <TopicName name={topic.name} />
      <StargazerCount count={topic.stargazerCount} />
    </li>
  );
};

RelatedTopic.propTypes = {
  topic: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    stargazerCount: PropTypes.number.isRequired,
  }).isRequired,
};

export default RelatedTopic;
