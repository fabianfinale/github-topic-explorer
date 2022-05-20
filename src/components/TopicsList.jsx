import React from 'react';
import PropTypes from 'prop-types';
import RelatedTopic from './RelatedTopic';

const TopicsList = ({ relatedTopics }) => {
  return (
    <section className='topic-list'>
      <h2>Related Topics</h2>
      <ul>
        {relatedTopics.map((relatedTopic) => (
          <RelatedTopic key={relatedTopic.id} topic={relatedTopic} />
        ))}
      </ul>
    </section>
  );
};

TopicsList.propTypes = {
  relatedTopics: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      stargazerCount: PropTypes.number.isRequired,
    }).isRequired
  ),
};

export default TopicsList;
