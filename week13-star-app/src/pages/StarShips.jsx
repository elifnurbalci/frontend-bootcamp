import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";

function StarShips() {
  const [data, setShips] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios.get("https://swapi.dev/api/starships")
      .then((res) => {
        setShips(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching starships:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <div className='container'>
        {data.map((ship, index) => {
          const shipId = ship.url.split('/').slice(-2, -1)[0];
          return (
            <Link to={`/starships/${shipId}`} className='ship' key={shipId}>
              <img src="./ship.jpg" width={100} alt={ship.name} />
              <p className='title'>{ship.name}</p>
              <p className='description'>Model: {ship.model}</p>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default StarShips;
