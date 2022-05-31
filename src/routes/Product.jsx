import { useParams, useSearchParams } from "react-router-dom";
import { useQuery, gql } from 'urql';
const TodosQuery = gql`
query GetProduct($id: ID!){
  Products_by_id(id: $id){
    id
    title
    price
  }
}
`;



export default function Product() {

  const params = useParams()
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery, variables: { id: params.id }
  });
  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      <p>{data.Products_by_id.id}</p>
      <p>{data.Products_by_id.title}</p>
      <p>{data.Products_by_id.price}</p>
    </div>
  )
}