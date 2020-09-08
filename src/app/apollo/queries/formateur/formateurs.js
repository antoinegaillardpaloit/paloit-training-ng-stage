import gql from "graphql-tag";

const FORMATEURS_QUERY = gql`
  query Formateurs {
    formateurs {
      id
      nom
      bio
      linkedin
      github
      twitter
      photo {
        url
      }
      formations {
        id
        intitule
      }
    }
  }
`;

export default FORMATEURS_QUERY;
