import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LinearProgress from '@mui/material/LinearProgress';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';


function Publisher() {
    const initialPublisher = {
        id: "",
        name: "",
        establishmentYear: "",
        address: "",
    };
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'rgba(255, 0, 0, 0.6)',
        borderRadius: '8px',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        color: 'black',
        boxShadow: 24,
        p: 4,
    };

    const [newPublisher, setNewPublisher] = useState(initialPublisher);
    const [updatedPublisher, setUpdatedPublisher] = useState(initialPublisher);
    const [publishers, setPublishers] = useState([]);
    const [update, setUpdate] = useState(false);
    const [isNew, setIsNew] = useState(true);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers")
        .then((res) => {
            setPublishers(res.data);
            setUpdate(true);
            setLoading(false);
        });
    }, [update]);

    if (loading) {
        return <div>
          <Box sx={{ width: '100%' }}>
            <LinearProgress />
          </Box>
        </div>
    }

    const handleAddPublisher = () => {
        axios.post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers", newPublisher)
        .then(() => {
            setUpdate(false);
            setNewPublisher(initialPublisher);
        })
        .catch((error) => {
            setMessage(error.message);
            setOpen(true);
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
            setMessage(error.message);
            setOpen(true);
        })
    }

    const handleDeletePublisher = (publisher) => {
        axios.delete(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers/" + publisher.id)
        .then(() => {
            setUpdate(false);
            setNewPublisher(initialPublisher);
        })
        .catch((error) => {
            setMessage(error.message);
            setOpen(true);
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
            <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
            >
            <Box sx={style}>
                <Typography id="keep-mounted-modal-title" variant="h6" component="h2" fontWeight={800}>
                Error
                </Typography>
                <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
                {message}
                </Typography>
            </Box>
            </Modal>
        </>
  )
}
export default Publisher