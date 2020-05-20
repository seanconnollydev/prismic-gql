import gql from 'graphql-tag';
import { useQuery } from '@apollo/react-hooks';

const GET_SECTION = gql`
  query GetSection {
    section(uid: "test-section") {
      id
      data
    }
  }
`;

const GraphQLPage = () => {
  const { data, error } = useQuery(GET_SECTION);
  console.log({ data });
  if (error) {
    console.error(error);
  }

  return (
    <div>
      <p>Filter by graphql in the Networks tab.</p>
      <p>Sample response times range between 4-9ms (after initial cache hit)</p>
      <p>Note we are using Apollo @cacheControl directives here along with Automatic Persisted Queries for caching at all layers.</p>
    </div>
  );
};

export default GraphQLPage;
