import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function Publisher() {
    const initialPublisher = {
        id: "",
        name: "",
        establishmentYear: "",
        address: "",
    };

    const [newPublisher, setNewPublisher] = useState(initialPublisher);
    const [updatedPublisher, setUpdatedPublisher] = useState(initialPublisher);
    const [publishers, setPublishers] = useState([]);
    const [update, setUpdate] = useState(false);
    const [isNew, setIsNew] = useState(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers")
        .then((res) => {
            setPublishers(res.data);
            setUpdate(true);
            setLoading(false);
        });
    }, [update]);

    if (loading) {
        return <div>Loading........</div>
    }

    const handleAddPublisher = () => {
        axios.post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers", newPublisher)
        .then(() => {
            setUpdate(false);
            setNewPublisher(initialPublisher);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleUpdatePublisher = () => {
        axios.put(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers/" + updatedPublisher.id, updatedPublisher)
        .then(() => {
            setUpdate(false);
            setUpdatedPublisher(initialPublisher);
            setIsNew(true);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleDeletePublisher = (publisher) => {
        axios.delete(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers/" + publisher.id)
        .then(() => {
            setUpdate(false);
            setNewPublisher(initialPublisher);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewPublisher((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleEditInput = (publisher) => {
        setUpdatedPublisher(publisher);
        setIsNew(false);
    }

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedPublisher((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    return (
        <>
        <h1>Add Publisher</h1>
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="ID" variant="outlined" name="id" value={isNew ? newPublisher.id : updatedPublisher.id} onChange={isNew ? handleInputChange : handleEditInputChange}/>
        <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={isNew ? newPublisher.name : updatedPublisher.name} onChange={isNew ? handleInputChange : handleEditInputChange}/>
        <TextField id="outlined-basic" label="Year" variant="outlined" name="establishmentYear" value={isNew ? newPublisher.establishmentYear : updatedPublisher.establishmentYear} onChange={isNew ? handleInputChange : handleEditInputChange}/>
        <TextField id="outlined-basic" label="Address" variant="outlined" name="address" value={isNew ? newPublisher.address : updatedPublisher.address} onChange={isNew ? handleInputChange : handleEditInputChange}/>
        </Box>
        <h2>Publisher List</h2>
        {publishers?.map((publisher, index) => (
            <div key={index}>
                <div>
                    <EditNoteIcon onClick={() => handleEditInput(publisher)} />
                    {publisher.name}
                    <HighlightOffIcon onClick={() => handleDeletePublisher(publisher)} />
                    </div>
                    <br />
                </div>
        ))}
        {isNew ? (
            <Button variant="contained" onClick={handleAddPublisher}>SAVE</Button>
        ) : (
            <Button variant="contained" onClick={handleUpdatePublisher}>UPDATE</Button>
            )}
        </>
  )
}
export default Publisher