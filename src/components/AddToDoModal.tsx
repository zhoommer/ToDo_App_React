import React, { useRef, useState } from "react";
import {
  Modal,
  Box,
  TextField,
  IconButton,
  Button,
  Popper,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Snackbar,
  SnackbarOrigin,
} from "@mui/material";
import { CalendarMonth, Label } from "@mui/icons-material";
import { style } from "./AddLabelModal";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { customTheme } from "../assets/css/textFieldStyle";
import { useAppDispatch, useAppSelector } from "../redux/app/store";
import "../assets/css/dateInputStyle.css";
import { addToDo } from "../redux/features/ToDo/addToDoSlice";

interface SnackState extends SnackbarOrigin {
  show: boolean;
  message: string;
}

type AddToDoModalTypes = {
  open: boolean;
  handleClose: any;
};
const AddToDoModal: React.FC<AddToDoModalTypes> = ({ open, handleClose }) => {
  const dispatch = useAppDispatch();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const [snackbar, setsnacbar] = useState<SnackState>({
    show: false,
    message: "",
    vertical: "top",
    horizontal: "right",
  });

  const { show, message, vertical, horizontal } = snackbar;

  const openAnchor = Boolean(anchorEl);
  const id = open ? "labels-popper" : undefined;

  const outerTheme = useTheme();

  const labels = useAppSelector((state) => state.labels);

  const [selectedCheckbox, setSelectedChecbox] = useState<number[]>([]);
  const [title, setTitle] = useState<string>("");
  const [description, setdescription] = useState<string>("");
  const [schedule, setschedule] = useState<string>("");
  const handleChangeCheckBox = (id: number) => {
    setAnchorEl(anchorEl);
    const isSelected = selectedCheckbox.includes(id);
    if (isSelected) {
      setSelectedChecbox(selectedCheckbox.filter((item) => item !== id));
    } else {
      setSelectedChecbox([...selectedCheckbox, id]);
    }
  };

  const dateInputRef = useRef<HTMLInputElement>(null);

  const handleHiddenDateInput = () => {
    if (dateInputRef.current) {
      dateInputRef.current.style.opacity = "1";
    }
  };

  const handleAddToDoModal = async () => {
    let data = {
      title: title,
      description: description,
      labels: selectedCheckbox,
      schedule: schedule,
    };
    try {
      const res = await dispatch(addToDo(data));
      if (res.meta.requestStatus === "fulfilled") {
        setsnacbar({
          show: true,
          message: "ToDo was created successfully",
          vertical: "top",
          horizontal: "right",
        });

        setTimeout(() => {
          setsnacbar({
            show: false,
            message: "",
            vertical: "top",
            horizontal: "right",
          });
        }, 5000);
      }
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="text-gray-300">
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={show}
        message={message}
        key={vertical + horizontal}
        autoHideDuration={3}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ThemeProvider theme={customTheme(outerTheme)}>
            <TextField
              value={title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTitle(e.target.value);
              }}
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
              value={description}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setdescription(e.target.value)
              }
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

            <input
              value={schedule}
              type={"date"}
              ref={dateInputRef}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setschedule(e.target.value)
              }
            />
          </ThemeProvider>

          <div className="flex justify-end">
            <IconButton
              color="warning"
              sx={{ padding: "10px" }}
              aria-describedby={id}
              onClick={handleClick}
            >
              <Label className="text-gray-300" />
              <Popper
                id={id}
                open={openAnchor}
                anchorEl={anchorEl}
                style={{ zIndex: "9999" }}
              >
                <Box
                  sx={{
                    border: 1,
                    p: 1,
                    bgcolor: "background.paper",
                    borderRadius: ".5em",
                  }}
                >
                  {
                    <FormGroup>
                      {labels?.data?.map((label: any, index: any) => (
                        <FormControlLabel
                          key={index}
                          control={
                            <Checkbox
                              onChange={() => {
                                handleChangeCheckBox(index + 1);
                              }}
                              checked={selectedCheckbox.includes(index + 1)}
                              sx={{
                                color: label.color,
                                "&.Mui-checked": {
                                  color: label.color,
                                },
                              }}
                            />
                          }
                          label={label.label}
                        />
                      ))}
                    </FormGroup>
                  }
                </Box>
              </Popper>
            </IconButton>
            <IconButton
              color="secondary"
              sx={{ padding: "10px" }}
              onClick={handleHiddenDateInput}
            >
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
            <Button
              variant="outlined"
              onClick={handleAddToDoModal}
              className="addToDoButton"
            >
              Add To-Do
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

export default AddToDoModal;
