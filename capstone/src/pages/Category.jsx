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

function Category() {
    const initialCategory = {
        id: "",
        name: "",
        description: "",
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

    const [newCategory, setNewCategory] = useState(initialCategory);
    const [updatedCategory, setUpdatedCategory] = useState(initialCategory);
    const [categories, setCategories] = useState([]);
    const [update, setUpdate] = useState(false);
    const [isNew, setIsNew] = useState(true);
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);
    const [message, setMessage] = useState("");
    const handleClose = () => setOpen(false);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/categories")
        .then((res) => {
            setCategories(res.data);
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

    const handleAddCategory = () => {
        axios.post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/categories", newCategory)
        .then(() => {
            setUpdate(false);
            setNewCategory(initialCategory);
        })
        .catch((error) => {
          setMessage(error.message);
          setOpen(true);
        })
    }

    const handleUpdateCategory = () => {
        axios.put(import.meta.env.VITE_APP_BASE_URL + "/api/v1/categories/" + updatedCategory.id, updatedCategory)
        .then(() => {
            setUpdate(false);
            setUpdatedCategory(initialCategory);
            setIsNew(true);
        })
        .catch((error) => {
          setMessage(error.message);
          setOpen(true);
        })
    }

    const handleDeleteCategory = (category) => {
        axios.delete(import.meta.env.VITE_APP_BASE_URL + "/api/v1/categories/" + category.id)
        .then(() => {
            setUpdate(false);
            setNewCategory(initialCategory);
            setIsNew(true);
        })
        .catch((error) => {
          setMessage(error.message);
          setOpen(true);
        })
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewCategory((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    const handleEditInput = (category) => {
        setUpdatedCategory(category);
        setIsNew(false);
    }

    const handleEditInputChange = (e) => {
        const { name, value } = e.target;
        setUpdatedCategory((prev) => ({
        ...prev,
        [name]: value,
        }));
    };

    return (
      <>
        <h1>Add Category</h1>
        <Box
        component="form"
        sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
        noValidate
        autoComplete="off"
        >
        <TextField id="outlined-basic" label="Name" variant="outlined" name="name" value={isNew ? newCategory.name : updatedCategory.name} onChange={isNew ? handleInputChange : handleEditInputChange}/>
        <TextField id="outlined-basic" label="Description" variant="outlined" name="description" value={isNew ? newCategory.description : updatedCategory.description} onChange={isNew ? handleInputChange : handleEditInputChange}/>
        </Box>
        <h2>Category List</h2>
        {categories?.map((category, index) => (
            <div key={index}>
                <div>
                    <EditNoteIcon onClick={() => handleEditInput(category)} />
                    {category.name}
                    <HighlightOffIcon onClick={() => handleDeleteCategory(category)} />
                    </div>
                    <br />
                </div>
        ))}
        {isNew ? (
            <Button variant="contained" onClick={handleAddCategory}>SAVE</Button>
        ) : (
            <Button variant="contained" onClick={handleUpdateCategory}>UPDATE</Button>
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
export default Category