import React from "react";
import { Modal, Box, TextField, IconButton, Button } from "@mui/material";
import { CalendarMonth, Label } from "@mui/icons-material";

const style = {
  position: "absolute" as "absolute",
  display: "flex",
  flexDirection: "column",
  top: "30%",
  left: "55%",
  transform: "translate(-50%, -50%)",
  width: "800px",
  color: "f1f1f1",
  bgcolor: "#151515",
  border: "2px solid #000",
  borderRadius: "10px",
  boxShadow: 24,
  p: 4,
};

type AddToDoModalTypes = {
  open: boolean;
  handleClose: any;
};
const AddToDoModal: React.FC<AddToDoModalTypes> = ({ open, handleClose }) => {
  return (
    <div className="text-gray-300">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField label="To-do name" variant="standard" color="warning" />
          <TextField
            label="Description"
            variant="standard"
            color="warning"
            margin="normal"
          />

          <div className="flex justify-end">
            <IconButton color="warning" sx={{ padding: "10px" }}>
              <Label className="text-gray-300" />
            </IconButton>
            <IconButton color="secondary" sx={{ padding: "10px" }}>
              <CalendarMonth className="text-gray-300" />
            </IconButton>
          </div>

          <div className="flex justify-end mt-3">
            <Button variant="outlined" color="secondary" sx={{ marginRight: "10px" }} onClick={handleClose}>Close</Button>
            <Button variant="outlined">Add To-Do</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddToDoModal;
