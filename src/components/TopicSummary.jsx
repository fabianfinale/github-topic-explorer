import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
import StargazerCount from './common/StargazerCount';

const TopicSummary = ({ topic }) => {
  return (
    <section className='topic__container'>
      <div className='topic__header'>
        <FontAwesomeIcon
          className='topic__icon'
          icon={faGithubSquare}
          size='2x'
        />
        {topic.name}
      </div>
      <div className='topic__body'>
        <StargazerCount count={topic.stargazerCount} verbose />
      </div>
    </section>
  );
};

TopicSummary.propTypes = {
  topic: PropTypes.shape({
    name: PropTypes.string.isRequired,
    relatedTopics: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        stargazerCount: PropTypes.number.isRequired,
      }).isRequired
    ),
    stargazerCount: PropTypes.number.isRequired,
  }),
};

export default TopicSummary;
