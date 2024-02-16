import React from "react";
import { Modal, Box, TextField, IconButton, Button } from "@mui/material";
import { CalendarMonth, Label } from "@mui/icons-material";
import { style } from "./AddLabelModal";
import {
  ThemeProvider,
  useTheme,
} from "@mui/material/styles";
import { customTheme } from "../assets/css/textFieldStyle";



type AddToDoModalTypes = {
  open: boolean;
  handleClose: any;
};
const AddToDoModal: React.FC<AddToDoModalTypes> = ({ open, handleClose }) => {
  const outerTheme = useTheme();
  return (
    <div className="text-gray-300">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              label="To-do name"
              variant="standard"
              color="warning"
              InputLabelProps={{
                style: {
                  color: "#E0E3E7",
                },
              }}
            />
            <TextField
              label="Description"
              variant="standard"
              color="warning"
              margin="normal"
              InputLabelProps={{
                style: {
                  color: "#E0E3E7",
                },
              }}
            />
          </ThemeProvider>

          <div className="flex justify-end">
            <IconButton color="warning" sx={{ padding: "10px" }}>
              <Label className="text-gray-300" />
            </IconButton>
            <IconButton color="secondary" sx={{ padding: "10px" }}>
              <CalendarMonth className="text-gray-300" />
            </IconButton>
          </div>

          <div className="flex justify-end mt-3">
            <Button
              variant="outlined"
              color="secondary"
              sx={{ marginRight: "10px" }}
              onClick={handleClose}
            >
              Close
            </Button>
            <Button variant="outlined">Add To-Do</Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddToDoModal;
