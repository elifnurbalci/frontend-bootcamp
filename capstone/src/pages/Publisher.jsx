import { useEffect, useState } from "react";
import axios from 'axios';

function Publisher() {
    const initialPublisher = {
        "id": 0,
        "name": "string",
        "establishmentYear": 0,
        "address": "string"
    };

    const [publishers, setPublishers] = useState([]);
    const [publisher, setPublisher] = useState(initialPublisher);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers")
        .then((res) => {
            setPublishers(res.data);
            setLoading(false);
        });
    }, []);
    console.log(publishers);

    if (loading) {
        return <div>Loading........</div>
    }

    const handleAddPublisher = () => {
        axios.post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers", publisher)
        .then((res) => {
            console.log(res);
        })
        .catch((error) => {
            console.log(error);
        })
    }

  return (
    <>
    <h1>Publisher List</h1>
    {publishers?.map((publisher, index) => (
        <div key={index}>
            <p>
                {publisher.name}
            </p>
        </div>
    ))}
    <button onClick={handleAddPublisher}></button>
    </>
  )
}
export default Publisher