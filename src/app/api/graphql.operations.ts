import { gql } from 'apollo-angular';

const GET_TASKS = gql`
  query GetTasks {
    tasks {
      name
      trader {
        name
        imageLink
      }
      kappaRequired
      wikiLink
      map {
        name
      }
    }
  }
`;

export { GET_TASKS };
