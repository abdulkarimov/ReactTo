import { useQuery, gql } from 'urql';

export default function Footer() {
  const count = gql`
    query {
      products_aggregated{
        count {
          id
          status
        }
    }
    }
  `

  const [result, reexecuteQuery2] = useQuery({
    query: count,
  });


  let temp = null;
  const { data, fetching, error } = result;



  const test = (e) => {
    if (temp)
      temp.classList.remove("active");
    const element = document.querySelector('#id' + e.target.innerHTML);
    temp = element;

    element.classList.add("active");
  }

  const getAnimalsContent = animals => {
    let content = [];
    for (let i = 0; i < parseInt(result.data.products_aggregated[0].count.id) / 4; i++) {
      let a = 'id' + i;
      content.push(<a id={a} value={i}  onClick={test} href="#">{i}</a>);
    } return content;
  };

  return (
    <div className='pagination'>
      {
        // <button onClick={test22}></button>
        getAnimalsContent()
      }
    </div>
  )
}