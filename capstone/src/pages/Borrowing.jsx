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
import BookIcon from "@mui/icons-material/Book";
import Snackbar from "@mui/material/Snackbar";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";

function Borrowing() {
  const initialBorrowing = {
    borrowerName: "",
    borrowerMail: "",
    borrowingDate: "",
    bookForBorrowingRequest: {
      id: "",
      name: "",
      publicationYear: "",
      stock: "",
    },
  };
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "rgba(255, 0, 0, 0.6)",
    borderRadius: "8px",
    boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    color: "black",
    boxShadow: 24,
    p: 4,
  };

  const [newBorrowing, setNewBorrowing] = useState(initialBorrowing);
  const [updatedBorrowing, setUpdatedBorrowing] = useState(initialBorrowing);
  const [borrowings, setBorrowings] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");
  const [books, setBooks] = useState([]);
  const [selectedBook, setSelectedBook] = useState([]);
  const [bookPlaceHolder, setBookPlaceHolder] = useState("Select");
  const [returnedBorrowingId, setReturnedBorrowingId] = useState("");

  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/borrows")
      .then((res) => {
        setBorrowings(res.data);
        setUpdate(true);
        setLoading(false);
      });
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

  const handleAddBorrowing = () => {
    axios
      .post(import.meta.env.VITE_APP_BASE_URL + "/api/v1/borrows", newBorrowing)
      .then(() => {
        setUpdate(false);
        setNewBorrowing(initialBorrowing);
        setSnackMessage("Borrowing added successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleUpdateBorrowing = () => {
    axios
      .put(
        import.meta.env.VITE_APP_BASE_URL +
          "/api/v1/borrows/" +
          updatedBorrowing.id,
        updatedBorrowing
      )
      .then(() => {
        setUpdate(false);
        setUpdatedBorrowing(initialBorrowing);
        setIsNew(true);
        setSnackMessage("Borrowing updated successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleDeleteBorrowing = (borrowing) => {
    axios
      .delete(
        import.meta.env.VITE_APP_BASE_URL + "/api/v1/borrows/" + borrowing.id
      )
      .then(() => {
        setUpdate(false);
        setNewBorrowing(initialBorrowing);
        setSnackMessage("Borrowing deleted successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBorrowing((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditInput = (borrowing) => {
    setUpdatedBorrowing(borrowing);
    setIsNew(false);
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBorrowing((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseSnack = () => {
    setSnackOpen(false);
  };

  const handleBookSelectChange = (e) => {
    const { value } = e.target;
    setSelectedBook(value);
    setNewBorrowing((prev) => ({
      ...prev,
      bookForBorrowingRequest: { ...prev.book, id: value },
    }));
  };

  const handleBookEditSelectChange = (e) => {
    const { value } = e.target;
    setSelectedBook(value);
    setUpdatedBorrowing((prev) => ({
      ...prev,
      bookForBorrowingRequest: { ...prev.book, id: value },
    }));
  };

  const handleReturn = (returnedBorrowing) => {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth() + 2;
    const day = currentDate.getDate();
    const returnedDate = `${year}-${month}-${day}`;

    returnedBorrowing.returnDate = returnedDate;

    axios
      .put(
        import.meta.env.VITE_APP_BASE_URL +
          "/api/v1/borrows/" +
          returnedBorrowing.id,
        returnedBorrowing
      )
      .then((res) => {
        setUpdate(false);
        setUpdatedBorrowing(initialBorrowing);
        setIsNew(true);
        setSnackMessage("Returned successfully!");
        setSnackOpen(true);
        setReturnedBorrowingId(returnedBorrowing.id);
      })
      .catch((e) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  return (
    <>
      <h1>Add Borrowing</h1>
      <Box
        component="form"
        sx={{ "& > :not(style)": { m: 1, width: "25ch" } }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          label="Borrower Name"
          variant="outlined"
          name="borrowerName"
          value={
            isNew ? newBorrowing.borrowerName : updatedBorrowing.borrowerName
          }
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Borrower Email"
          variant="outlined"
          name="borrowerMail"
          value={
            isNew ? newBorrowing.borrowerMail : updatedBorrowing.borrowerMail
          }
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        <TextField
          id="outlined-basic"
          variant="outlined"
          name="borrowingDate"
          type="date"
          value={
            isNew ? newBorrowing.borrowingDate : updatedBorrowing.borrowingDate
          }
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Books</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={
              isNew
                ? newBorrowing.bookForBorrowingRequest?.id || 0
                : updatedBorrowing.book?.id || 0
            }
            label="Book"
            onChange={
              isNew ? handleBookSelectChange : handleBookEditSelectChange
            }
          >
            <MenuItem value={0} disabled>
              {bookPlaceHolder} Book
            </MenuItem>
            {books?.map((book) => (
              <MenuItem key={book.id} value={book.id}>
                {book.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        {isNew ? (
          <Button
            variant="contained"
            onClick={handleAddBorrowing}
            className="actionBtn"
          >
            SAVE
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleUpdateBorrowing}
            className="actionBtn"
          >
            UPDATE
          </Button>
        )}
      </Box>
      <h2>Borrowing List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          paddingBottom: 20,
          paddingLeft: 10,
        }}
      >
        {borrowings?.map((borrowing, index) => (
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
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                style={{ display: "flex", justifyContent: "space-between" }}
              >
                <div>
                  <BookIcon style={{ paddingRight: 5 }} />
                  {borrowing.borrowerName}
                </div>
                <HighlightOffIcon
                  onClick={() => handleDeleteBorrowing(borrowing)}
                />
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
                Borrowed Book:{" "}
                </span>
                {borrowing.book.name}
                <br />
                <span style={{ fontWeight: 600, color: "black" }}>
                  Borrowered Date:{" "}
                </span>
                {borrowing.borrowingDate}
              </Typography>
            </CardContent>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              {returnedBorrowingId === borrowing.id ||
              Boolean(borrowing.returnDate) ? (
                  <span
                    style={{ fontWeight: 500, color: "darkgray", fontSize: 12, marginLeft: "auto" }}
                  >
                    Returned Date: {borrowing.returnDate}
                  </span>
              ) : (
                <>
                <EditNoteIcon onClick={() => handleEditInput(borrowing)} />
                <AssignmentReturnIcon onClick={() => handleReturn(borrowing)} />
                </>
              )}
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
    </>
  );
}
export default Borrowing;
