import { gql } from '@apollo/client';

export const TOPIC = gql`
  query Topics($name: String!) {
    topic(name: $name) {
      name
      relatedTopics(first: 10) {
        id
        name
        stargazerCount
      }
      stargazerCount
    }
  }
`;
