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
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import Snackbar from "@mui/material/Snackbar";

function Publisher() {
  const initialPublisher = {
    id: "",
    name: "",
    establishmentYear: "",
    address: "",
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

  const [newPublisher, setNewPublisher] = useState(initialPublisher);
  const [updatedPublisher, setUpdatedPublisher] = useState(initialPublisher);
  const [publishers, setPublishers] = useState([]);
  const [update, setUpdate] = useState(false);
  const [isNew, setIsNew] = useState(true);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [snackOpen, setSnackOpen] = useState(false);
  const [snackMessage, setSnackMessage] = useState("");

  const handleClose = () => setOpen(false);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers")
      .then((res) => {
        setPublishers(res.data);
        setUpdate(true);
        setLoading(false);
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

  const handleAddPublisher = () => {
    axios
      .post(
        import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers",
        newPublisher
      )
      .then(() => {
        setUpdate(false);
        setNewPublisher(initialPublisher);
        setSnackMessage("Publisher added successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleUpdatePublisher = () => {
    axios
      .put(
        import.meta.env.VITE_APP_BASE_URL +
          "/api/v1/publishers/" +
          updatedPublisher.id,
        updatedPublisher
      )
      .then(() => {
        setUpdate(false);
        setUpdatedPublisher(initialPublisher);
        setIsNew(true);
        setSnackMessage("Publisher updated successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

  const handleDeletePublisher = (publisher) => {
    axios
      .delete(
        import.meta.env.VITE_APP_BASE_URL + "/api/v1/publishers/" + publisher.id
      )
      .then(() => {
        setUpdate(false);
        setNewPublisher(initialPublisher);
        setSnackMessage("Publisher deleted successfully!");
        setSnackOpen(true);
      })
      .catch((error) => {
        setMessage(error.message);
        setOpen(true);
      });
  };

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
  };

  const handleEditInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedPublisher((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCloseSnack = () => {
    setSnackOpen(false);
  };

  return (
    <div className="contentArea">
      <h1>Add Publisher</h1>
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
          value={isNew ? newPublisher.name : updatedPublisher.name}
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Year"
          variant="outlined"
          name="establishmentYear"
          value={
            isNew
              ? newPublisher.establishmentYear
              : updatedPublisher.establishmentYear
          }
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        <TextField
          id="outlined-basic"
          label="Address"
          variant="outlined"
          name="address"
          value={isNew ? newPublisher.address : updatedPublisher.address}
          onChange={isNew ? handleInputChange : handleEditInputChange}
        />
        {isNew ? (
          <Button
            variant="contained"
            onClick={handleAddPublisher}
            className="actionBtn"
          >
            SAVE
          </Button>
        ) : (
          <Button
            variant="contained"
            onClick={handleUpdatePublisher}
            className="actionBtn"
          >
            UPDATE
          </Button>
        )}
      </Box>
      <h2>Publisher List</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "30px",
          paddingBottom: 20,
          paddingLeft: 10,
        }}
      >
        {publishers?.map((publisher, index) => (
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
                <LocalLibraryIcon style={{ paddingRight: 5 }} />
                {publisher.name}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
                <br />
                <br />
              </Typography>
              <hr />
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                <span style={{ fontWeight: 600, color: "black" }}>Establishment Year: </span>
                {publisher.establishmentYear}
                <br />
              </Typography>
            </CardContent>
            <CardActions
              style={{ display: "flex", justifyContent: "space-between" }}
            >
              <EditNoteIcon onClick={() => handleEditInput(publisher)} />
              <HighlightOffIcon
                onClick={() => handleDeletePublisher(publisher)}
              />
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
export default Publisher;
