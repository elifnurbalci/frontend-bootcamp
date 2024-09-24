import { useEffect, useState } from "react";
import axios from 'axios';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import EditNoteIcon from '@mui/icons-material/EditNote';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


function Category() {
    const initialCategory = {
        id: "",
        name: "",
        description: "",
    };

    const [newCategory, setNewCategory] = useState(initialCategory);
    const [updatedCategory, setUpdatedCategory] = useState(initialCategory);
    const [categories, setCategories] = useState([]);
    const [update, setUpdate] = useState(false);
    const [isNew, setIsNew] = useState(true);

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/categories")
        .then((res) => {
            setCategories(res.data);
            setUpdate(true);
            setLoading(false);
        });
    }, [update]);

    if (loading) {
        return <div>Loading........</div>
    }

    const handleAddCategory = () => {
        axios.post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/categories", newCategory)
        .then(() => {
            setUpdate(false);
            setNewCategory(initialCategory);
        })
        .catch((error) => {
            console.log(error);
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
            console.log(error);
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
            console.log(error);
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
        </>
  )
}
export default Category