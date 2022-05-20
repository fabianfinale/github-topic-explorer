import React from 'react';

const Assignment = () => {
  return (
    <main className='assignment__container'>
      <h1 className='assignment__title'>Assignment</h1>
      <p>
        Your task is to build a React web application that displays all the{' '}
        <a
          href='https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic'
          target='_blank'
          rel='noreferrer'>
          topics
        </a>{' '}
        related to the term "react", using the GitHub GraphQL API. The
        application should display how many{' '}
        <a
          href='https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection'
          target='_blank'
          rel='noreferrer'>
          stargazers
        </a>{' '}
        each topic has. A click on a topic should display the topics related to
        that topic, and how many stargazers they have. And so forth.
      </p>
      <p>
        To interact with the Github GraphQL API you'll need to have a{' '}
        <a
          href='https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql'
          target='_blank'
          rel='noreferrer'>
          Github API key
        </a>{' '}
      </p>
      <p>
        * You'll want to make use of the key in the .env file within your
        application You may use whatever React framework or library you find
        useful. URL routing is optional.
      </p>
    </main>
  );
};

export default Assignment;
