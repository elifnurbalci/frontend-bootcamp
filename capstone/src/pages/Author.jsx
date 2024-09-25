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
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import AttributionIcon from '@mui/icons-material/Attribution';
import Snackbar from '@mui/material/Snackbar';


function Author() {
    const initialAuthor = {
        name: "",
        birthDate: "",
        country: "",
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

    const [newAuthor, setNewAuthor] = useState(initialAuthor);
    const [updatedAuthor, setUpdatedAuthor] = useState(initialAuthor);
    const [authors, setAuthors] = useState([]);
    const [update, setUpdate] = useState(false);
    const [isNew, setIsNew] = useState(true);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const [snackOpen, setSnackOpen] = useState(false);
    const [snackMessage, setSnackMessage] = useState("");

    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/authors")
        .then((res) => {
            setAuthors(res.data);
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

    const handleAddAuthor = () => {
        axios.post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/authors", newAuthor)
        .then(() => {
            setUpdate(false);
            setNewAuthor(initialAuthor);
            setSnackMessage("Author added successfully!");
            setSnackOpen(true);
        })
        .catch((error) => {
            setMessage(error.message);
            setOpen(true);
        })
    }

    const handleUpdateAuthor = () => {
        axios.put(import.meta.env.VITE_APP_BASE_URL + "/api/v1/authors/" + updatedAuthor.id, updatedAuthor)
        .then(() => {
            setUpdate(false);
            setUpdatedAuthor(initialAuthor);
            setIsNew(true);
            setSnackMessage("Author updated successfully!");
            setSnackOpen(true);
        })
        .catch((error) => {
            setMessage(error.message);
            setOpen(true);
        })
    }

    const handleDeleteAuthor = (author) => {
        axios.delete(import.meta.env.VITE_APP_BASE_URL + "/api/v1/authors/" + author.id)
        .then(() => {
            setUpdate(false);
            setNewAuthor(initialAuthor);
            setSnackMessage("Author deleted successfully!");
            setSnackOpen(true);
        })
        .catch((error) => {
            setMessage(error.message);
            setOpen(true);
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewAuthor((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleEditInput = (author) => {
        setUpdatedAuthor(author);
        setIsNew(false);
    }

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedAuthor((prev) => ({
        ...prev,
        [name]: value,
        }));
    }

    const handleCloseSnack = () => {
        setSnackOpen(false);
    }

    return (
        <>
            <h1>Add Author</h1>
            <Box
            component="form"
            sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
            noValidate
            autoComplete="off"
            >
            <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={isNew ? newAuthor.name : updatedAuthor.name} onChange={isNew ? handleInputChange : handleEditInputChange}/>
            <TextField id="outlined-basic" type="date" variant="outlined" name="birthDate" value={isNew ? newAuthor.birthDate : updatedAuthor.birthDate} onChange={isNew ? handleInputChange : handleEditInputChange}/>
            <TextField id="outlined-basic" label="Country" variant="outlined" name="country" value={isNew ? newAuthor.country : updatedAuthor.country} onChange={isNew ? handleInputChange : handleEditInputChange}/>
            {isNew ? (
                <Button variant="contained" onClick={handleAddAuthor} className="actionBtn">SAVE</Button>
            ) : (
                <Button variant="contained" onClick={handleUpdateAuthor} className="actionBtn">UPDATE</Button>
                )}
            </Box>
            <h2>Author List</h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "30px", paddingBottom: 20, paddingLeft: 10 }}>
            {authors?.map((author, index) => (
                <Card sx={{ maxWidth: 345 }} style={{ padding: 20, display: "flex", flexDirection: "column", backgroundColor: '#EEE' }} key={index}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                    <AttributionIcon style={{paddingRight: 5}} />
                    {author.name}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                    <br />
                    <br />
                    </Typography >
                    <hr />
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    <span style={{fontWeight: 600, color:'black'}}>Birth Date: </span>{author.birthDate}
                    <br />
                    <span style={{fontWeight: 600, color:'black'}}>Country: </span>{author.country}
                    </Typography>
                </CardContent>
                <CardActions style={{ display: "flex", justifyContent: "space-between" }}>
                    <EditNoteIcon onClick={() => handleEditInput(author)} />
                    <HighlightOffIcon onClick={() => handleDeleteAuthor(author)} />
                </CardActions>
                </Card>
            ))}
            </div>
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
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
                open={snackOpen}
                onClose={handleCloseSnack}
                message={snackMessage}
                autoHideDuration={6000}
            />
        </>
  )
}
export default Author