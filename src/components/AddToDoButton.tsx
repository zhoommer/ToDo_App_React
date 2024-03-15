import { Add } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React, { useState } from "react";
import AddToDoModal from "./AddToDoModal";

const AddToDoButton: React.FC = () => {
  const [openToDoModal, setOpenToDoModal] = useState<boolean>(false);

  // when keypress "a" AddToDoModal will open...
  // useEffect(() => {
  //if (title === "Inbox") {
  // window.addEventListener("keydown", (event: KeyboardEvent) => {
  //  if (event.keyCode === 65) {
  //   setOpenToDoModal(true);
  // }
  //});
  // }
  //}, [title]);

  const handleClose = () => setOpenToDoModal(false);
  return (
    <div>
      <AddToDoModal open={openToDoModal} handleClose={handleClose} />
      <div className="absolute bottom-20 right-20 border border-blue-700 rounded-full bg-blue-700 p-1 hover:bg-blue-500">
        <IconButton
          color="primary"
          onClick={() => setOpenToDoModal(true)}
          className="hover:rotate-180 hover:transition 250ms ease-in"
        >
          <Add className="text-white" />
        </IconButton>
      </div>
    </div>
  );
};

export default AddToDoButton;
