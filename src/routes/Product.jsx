import { useParams, useSearchParams } from "react-router-dom";
import { useQuery, gql } from 'urql';
import Footer from "../components/Footer"
const TodosQuery = gql`
query GetProduct($offset: Int){
    products(limit: 4, offset: $offset) {
      id
      title
      price
    }
  }
`;

const  nnext = (e) =>{
  window.location.href = `/products/${e.target.value}` 
}


export default function Products() {
  const params = useParams()
  const [result, reexecuteQuery] = useQuery({
    query: TodosQuery, variables: { offset: params.id * 4 }
  });

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Oh no... {error.message}</p>;
  return (
    <div>
      {
        data.products.map(p => (
          <div key={p.id}>
            <p>{p.id}</p>
            <p>{p.title}</p>
            <p>{p.price}</p>
            <button value={p.id} onClick={nnext}>next</button>
          </div>
        ))
      }
      <Footer/>

    </div>

    
  )
}