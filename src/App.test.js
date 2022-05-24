import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import App from './App';
import { TOPIC } from './utils/graphqlQueries';
import { act } from 'react-dom/test-utils';
import Home from './pages/Home';
import { GraphQLError } from 'graphql';

describe('renders the app', () => {
  const mocks = [
    {
      request: {
        query: TOPIC,
        variables: {
          name: 'react',
        },
      },
      result: {
        data: {
          topic: {
            name: 'react',
            relatedTopics: [
              {
                id: '1',
                name: 'related topic 1',
                stargazerCount: 500,
              },
              {
                id: '2',
                name: 'related topic 2',
                stargazerCount: 500,
              },
              {
                id: '3',
                name: 'related topic 3',
                stargazerCount: 500,
              },
              {
                id: '4',
                name: 'related topic 4',
                stargazerCount: 500,
              },
              {
                id: '5',
                name: 'related topic 5',
                stargazerCount: 500,
              },
            ],
            stargazerCount: 600,
          },
        },
      },
    },
  ];

  it('should render without error', () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <App />
      </MockedProvider>
    );
    const titleElement = screen.getByText(
      /please, insert the topic you'll like to query/i
    );
    expect(titleElement).toBeInTheDocument();
  });

  it('should render loading state initially', () => {
    render(
      <MockedProvider mocks={[]}>
        <App />
      </MockedProvider>
    );
    const searchButton = screen.getByTestId('search-button');
    const spinner = screen.getByTestId('spinner');

    expect(searchButton).toContainElement(spinner);
  });

  // Happy path
  it('should render a topic, and its related topics', async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const searchbox = screen.getByRole('searchbox');
    const searchButton = screen.getByTestId('search-button');
    const topic = screen.getByTestId('topic-container');
    const listItems = screen.queryAllByRole('listitem');
    const relatedTopic = screen.getByText(/related topic 4/i);

    expect(searchbox).toHaveValue('react');
    expect(searchButton).toBeEnabled();
    expect(topic).toContainHTML('<span>react</span>');
    expect(listItems).toHaveLength(5);
    expect(relatedTopic).toBeInTheDocument();
  });

  // Sad path
  it('should show the error message', async () => {
    let errorMock = {
      request: {
        query: TOPIC,
        variables: {
          name: 'react',
        },
      },
      error: new Error('An error occurred'),
    };

    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const error = screen.getByText(/oops, something went wrong./i);
    const topic = screen.queryByTestId('topic-container');
    const listItems = screen.queryAllByRole('listitem');

    expect(error).toBeInTheDocument();
    expect(topic).not.toBeInTheDocument();
    expect(listItems).toHaveLength(0);
  });

  it('should show the error message, due to a GraphQL error', async () => {
    const errorMock = {
      request: {
        query: TOPIC,
        variables: {
          name: 'react',
        },
      },
      result: {
        errors: [new GraphQLError('A GraphQL error occurred')],
      },
    };
    render(
      <MockedProvider mocks={[errorMock]} addTypename={false}>
        <Home />
      </MockedProvider>
    );

    await act(() => new Promise((resolve) => setTimeout(resolve, 0)));

    const error = screen.getByText(/oops, something went wrong./i);
    const topic = screen.queryByTestId('topic-container');
    const listItems = screen.queryAllByRole('listitem');

    expect(error).toBeInTheDocument();
    expect(topic).not.toBeInTheDocument();
    expect(listItems).toHaveLength(0);
  });
});
