import { useEffect, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import EditNoteIcon from "@mui/icons-material/EditNote";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import LinearProgress from "@mui/material/LinearProgress";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import Snackbar from "@mui/material/Snackbar";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormGroup from "@mui/material/FormGroup";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Checkbox from "@mui/material/Checkbox";

function Book() {
  const initialBook = {
    id: "",
    name: "",
    publicationYear: "",
    stock: "",
    author: {
      id: "",
      name: "",
      birthDate: "",
      country: "",
    },
    publisher: {
      id: "",
      name: "",
      establishmentYear: "",
      address: "",
    },
    categories: [],
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: 'rgba(140, 0, 0, 0.8)',
    borderRadius: "8px",
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
    color: "black",
    boxShadow: 24,
    p: 4,
  };

  const [newBook, setNewBook] = useState(initialBook);
  const [updatedBook, setUpdatedBook] = useState(initialBook);
  const [books, setBooks] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [selectedAuthor, setSelectedAuthor] = useState({});
  const [authors, setAuthors] = useState([]);
  const [selectedPublisher, setSelectedPublisher] = useState({});
  const [publishers, setPublishers] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [categories, setCategories] = useState([]);
  const [categoryPlaceHolder, setCategoryPlaceHolder] = useState("Select");

  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/books")
      .then((res) => {
        setBooks(res.data);
        setUpdate(true);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/authors")
      .then((res) => {
        setAuthors(res.data);
        setUpdate(true);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers")
      .then((res) => {
        setPublishers(res.data);
        setUpdate(true);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/categories")
      .then((res) => {
        setCategories(res.data);
        setUpdate(true);
        setLoading(false);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  }, [update]);

  if (loading) {
    return (
      <div>
        <Box sx={{ width: "100%" }}>
          <LinearProgress />
        </Box>
      </div>
    );
  }

  const handleAddBook = () => {
    axios
      .post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/books", newBook)
      .then(() => {
        setUpdate(false);
        setNewBook(initialBook);
        setSnackMessage("Book added successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleUpdateBook = () => {
    axios
      .put(
        import.meta.env.VITE_APP_BASE_URL + "/api/v1/books/" + updatedBook.id,
        updatedBook
      )
      .then(() => {
        setUpdate(false);
        setUpdatedBook(initialBook);
        setIsNew(true);
        setSnackMessage("Book updated successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleDeleteBook = (book) => {
    axios
      .delete(import.meta.env.VITE_APP_BASE_URL + "/api/v1/books/" + book.id)
      .then(() => {
        setUpdate(false);
        setNewBook(initialBook);
        setSnackMessage("Book deleted successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditInput = (book) => {
    setUpdatedBook(book);
    setIsNew(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseSnack = () => {
    setSnackOpen(false);
  };

  const handleAuthorSelectChange = (e) => {
    const { value } = e.target;
    setSelectedAuthor(value);
    setNewBook((prev) => ({
      ...prev,
      author: { ...prev.author, id: value },
    }));
  };

  const handleAuthorEditSelectChange = (e) => {
    const { value } = e.target;
    setSelectedAuthor(value);
    setUpdatedBook((prev) => ({
      ...prev,
      author: { ...prev.author, id: value },
    }));
  };

  const handlePublisherSelectChange = (e) => {
    const { value } = e.target;
    setSelectedPublisher(value);
    setNewBook((prev) => ({
      ...prev,
      publisher: { ...prev.publisher, id: value },
    }));
  };
  const handlePublisherEditSelectChange = (e) => {
    const { value } = e.target;
    setSelectedAuthor(value);
    setUpdatedBook((prev) => ({
      ...prev,
      author: { ...prev.author, id: value },
    }));
  };

  const handleCategorySelectChange = (e, category) => {
    const { checked } = e.target;
    setNewBook((prev) => {
      const categories = checked
        ? [...prev.categories, category]
        : prev.categories.filter((c) => c.id !== category.id);
      return {
        ...prev,
        categories,
      };
    });
    setCategoryPlaceHolder((prev) => ({
      ...prev,
      categoryPlaceHolder: `${
        newBook.categories.length + (checked ? 1 : -1)
      } Selected`,
    }));
  };
  const handleCategoryEditSelectChange = (e) => {
    const { checked } = e.target;
    setUpdatedBook((prev) => {
      const categories = checked
        ? [...prev.categories, category]
        : prev.categories.filter((c) => c.id !== category.id);
      return {
        ...prev,
        categories,
      };
    });
    
    setCategoryPlaceHolder((prev) => ({
      ...prev,
      categoryPlaceHolder: `${
        updatedBook.categories.length + (checked ? 1 : -1)
      } Selected`,
    }));
  };

  return (
    <div className="contentArea">
      <h1>Add Book</h1>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          value={isNew ? newBook.name : updatedBook.name}
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Publication Year"
          variant="outlined"
          name="publicationYear"
          type="number"
          value={isNew ? newBook.publicationYear : updatedBook.publicationYear}
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Author</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={
              isNew ? newBook.author?.id || 0 : updatedBook.author?.id || 0
            }
            label="Author"
            onChange={
              isNew ? handleAuthorSelectChange : handleAuthorEditSelectChange
            }
          >
            <MenuItem value={0} disabled>
              {categoryPlaceHolder} Author
            </MenuItem>
            {authors?.map((author) => (
              <MenuItem key={author.id} value={author.id}>
                {author.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Publisher</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={
              isNew
                ? newBook.publisher?.id || 0
                : updatedBook.publisher?.id || 0
            }
            label="Publisher"
            onChange={
              isNew
                ? handlePublisherSelectChange
                : handlePublisherEditSelectChange
            }
          >
            <MenuItem value={0} disabled>
              {categoryPlaceHolder} Publisher
            </MenuItem>
            {publishers?.map((publisher) => (
              <MenuItem key={publisher.id} value={publisher.id}>
                {publisher.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormGroup>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={
                isNew
                  ? newBook.categories.map((c) => c.id)
                  : updatedBook.categories.map((c) => c.id)
              }
              multiple
              renderValue={(selected) => `${selected.length} Selected`}
              onChange={(e) => {
                const selectedIds = e.target.value;
                const selectedCategories = categories.filter((category) =>
                  selectedIds.includes(category.id)
                );

                if (isNew) {
                  setNewBook((prev) => ({
                    ...prev,
                    categories: selectedCategories,
                  }));
                } else {
                  setUpdatedBook((prev) => ({
                    ...prev,
                    categories: selectedCategories,
                  }));
                }
              }}
            >
              {categories?.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  <Checkbox
                    checked={
                      isNew
                        ? newBook.categories.some((c) => c.id === category.id)
                        : updatedBook.categories.some(
                            (c) => c.id === category.id
                          )
                    }
                  />
                  {category.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FormGroup>

        {isNew ? (
          <Button
            variant="contained"
            onClick={handleAddBook}
            className="actionBtn"
          >
            SAVE
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleUpdateBook}
            className="actionBtn"
          >
            UPDATE
          </Button>
        )}
      </Box>
      <h2>Book List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          paddingBottom: 20,
          paddingLeft: 10,
        }}
      >
        {books?.map((book, index) => (
          <Card
            sx={{ maxWidth: 345 }}
            style={{
              padding: 20,
              display: "flex",
              flexDirection: "column",
              backgroundColor: "#EEE",
            }}
            key={index}
          >
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                <LibraryBooksIcon style={{ paddingRight: 5 }} />
                {book.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                <br />
                <br />
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <span style={{ fontWeight: 600, color: "black" }}>
                  Publication Year:{" "}
                </span>
                {book.publicationYear}
                <br />
                <span style={{ fontWeight: 600, color: "black" }}>
                  Author Name:{" "}
                </span>
                {book.author.name}
              </Typography>
            </CardContent>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <EditNoteIcon onClick={() => handleEditInput(book)} />
              <HighlightOffIcon onClick={() => handleDeleteBook(book)} />
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
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            fontWeight={800}
          >
            Error
          </Typography>
          <Typography id="keep-mounted-modal-description" sx={{ mt: 2 }}>
            {message}
          </Typography>
        </Box>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackOpen}
        onClose={handleCloseSnack}
        message={snackMessage}
        autoHideDuration={6000}
      />
    </div>
  );
}
export default Book;
