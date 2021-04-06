import React from 'react';
import ReactDOM from 'react-dom';

function Card() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [items, setItems] = React.useState([]);
  
    React.useEffect(() => {
      fetch( 'https://randomuser.me/api/')
        .then(res => res.json())
        .then(
          (result) => {
              console.log("resule",result)
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])
  
    return (
        <h1>12333</h1>
    )

    
    
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} {item.price}
            </li>
          ))}
        </ul>
      );
    }
  }

  export default Card;