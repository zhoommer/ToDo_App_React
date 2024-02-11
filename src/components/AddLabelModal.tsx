import {
  Alert,
  Box,
  Button,
  Modal,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useAppDispatch } from "../redux/app/store";
import { createLabel } from "../redux/features/Labels/labelSlice";

export const style = {
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

interface AddLabelModal {
  open: boolean;
  handleClose: any;
}

const AddLabelModal: React.FC<AddLabelModal> = ({ open, handleClose }) => {
  const dispatch = useAppDispatch();
  const [label, setLabel] = useState<string>("");
  const [color, setColor] = useState<string>("");
  const [disabledButton, setDisabledButton] = useState<boolean>(false);


  useEffect(() => {
    if (label.length > 0 && color.length > 0) {
      setDisabledButton(false);
    } else {
      setDisabledButton(true);
    }
  }, [label, color]);

  const handleSubmit = () => {
    try {
      const data = {
      label: label,
      color: color,
    };
    dispatch(createLabel(data));
    } catch (error) {
      console.log(error)
    }
    
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography className="text-center text-gray-300 font-semibold">
            New Label
          </Typography>

          <TextField
            label="Give your label a name"
            variant="outlined"
            color="warning"
            margin="normal"
            name="label"
            required
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setLabel(e.target.value)
            }
          />
          <input
            type="color"
            name="color"
            id="color"
            className="rounded-sm"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setColor(e.target.value)
            }
          />

          <div className="mt-5 flex justify-center">
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit}
              disabled={disabledButton}
            >
              Add Label
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddLabelModal;
