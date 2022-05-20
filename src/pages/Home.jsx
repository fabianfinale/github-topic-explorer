import { useQuery } from '@apollo/client';
import React, { useState } from 'react';
import Searchbox from '../components/common/Searchbox';
import TopicsList from '../components/TopicsList';
import TopicSummary from '../components/TopicSummary';
import { QueryContext } from '../utils/context';
import { TOPIC } from '../utils/graphqlQueries';

const Home = () => {
  const [query, setQuery] = useState('react');

  const { loading, error, data } = useQuery(TOPIC, {
    variables: { name: query },
  });

  if (error) return <p>Oops, something went wrong.</p>;

  return (
    <QueryContext.Provider value={{ query, setQuery }}>
      <main className='home__container'>
        <h1>Please, insert the topic you'll like to query</h1>
        <Searchbox query={query} setQuery={setQuery} isLoading={loading} />
        {data && (
          <>
            <TopicSummary topic={data.topic} />
            <TopicsList relatedTopics={data.topic.relatedTopics} />
          </>
        )}
      </main>
    </QueryContext.Provider>
  );
};

export default Home;
