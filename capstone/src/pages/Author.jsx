import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import LinearProgress from '@mui/material/LinearProgress';

function Author() {
    const initialAuthor = {
        name: "",
        birthDate: "",
        country: "",
    };

    const [newAuthor, setNewAuthor] = useState(initialAuthor);
    const [updatedAuthor, setUpdatedAuthor] = useState(initialAuthor);
    const [authors, setAuthors] = useState([]);
    const [update, setUpdate] = useState(false);
    const [isNew, setIsNew] = useState(true);

    const [loading, setLoading] = useState(true);

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
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleUpdateAuthor = () => {
        axios.put(import.meta.env.VITE_APP_BASE_URL + "/api/v1/authors/" + updatedAuthor.id, updatedAuthor)
        .then(() => {
            setUpdate(false);
            setUpdatedAuthor(initialAuthor);
            setIsNew(true);
        })
        .catch((error) => {
            console.log(error);
        })
    }

    const handleDeleteAuthor = (author) => {
        axios.delete(import.meta.env.VITE_APP_BASE_URL + "/api/v1/authors/" + author.id)
        .then(() => {
            setUpdate(false);
            setNewAuthor(initialAuthor);
            setIsNew(true);
        })
        .catch((error) => {
            console.log(error);
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
    };

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
        </Box>
        <h2>Author List</h2>
        {authors?.map((author, index) => (
            <div key={index}>
                <div>
                    <EditNoteIcon onClick={() => handleEditInput(author)} />
                    {author.name}
                    <HighlightOffIcon onClick={() => handleDeleteAuthor(author)} />
                    </div>
                    <br />
                </div>
        ))}
        {isNew ? (
            <Button variant="contained" onClick={handleAddAuthor}>SAVE</Button>
        ) : (
            <Button variant="contained" onClick={handleUpdateAuthor}>UPDATE</Button>
            )}
        </>
  )
}
export default Author