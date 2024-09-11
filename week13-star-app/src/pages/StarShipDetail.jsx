import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';

function StarShipDetail() {
  const [starShip, setStarShip] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { shipId } = useParams();

  const fetchShip = async () => {
    try {
      setLoading(true);
      const res = await fetch(`https://swapi.dev/api/starships/${shipId}/`);
      const resData = await res.json();
      setStarShip(resData);
    } catch (error) {
      console.error("Error fetching ship details:", error);
      navigate('/starships');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchShip();
  }, [shipId]);

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="detail-container">
          <Link className="link-back" to="/starships">Back to Star Ships</Link>
          <div className="detail-ship">
            <img src="../ship.jpg" alt={starShip.name} />
            <h1>{starShip.name}</h1>
            <div className="detail-info">
              <p><strong>Model:</strong> {starShip.model}</p>
              <p><strong>Passengers:</strong> {starShip.passengers}</p>
              <p><strong>Max Speed:</strong> {starShip.max_atmosphering_speed}</p>
              <p><strong>Manufacturer:</strong> {starShip.manufacturer}</p>
              <p><strong>Crew:</strong> {starShip.crew}</p>
              <p><strong>Cargo Capacity:</strong> {starShip.cargo_capacity}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default StarShipDetail;
