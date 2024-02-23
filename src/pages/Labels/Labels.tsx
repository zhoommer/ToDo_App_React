import React, { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import {
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
  CircularProgress,
  Alert,
  AlertTitle,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import AddLabelModal from "../../components/AddLabelModal";
import { fetchLabels } from "../../redux/features/Labels/labelSlice";

const Labels: React.FC = () => {
  const [selectedCheckbox, setSelectedChecbox] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const labels = useAppSelector((state) => state.labels);

  const [openAddLabelModal, setOpenAddLabelModal] = useState<boolean>(false);

  const handleCloseAddLabelModal = () =>
    setOpenAddLabelModal(!openAddLabelModal);

  useEffect(() => {
    dispatch(fetchLabels());
  }, [labels.success, labels.error]);

  const handleChangeCheckBox = (id: number) => {
    const isSelected = selectedCheckbox.includes(id);
    if (isSelected) {
      setSelectedChecbox(selectedCheckbox.filter((item) => item !== id));
    } else {
      setSelectedChecbox([...selectedCheckbox, id]);
    }
  };

  return (
    <div>
      { labels.loading && (
        <CircularProgress color="inherit" />
      ) }
      {
        labels.success && (
          <Alert severity="success" color="success" variant="filled" className="absolute bottom-20 left-30">
            <AlertTitle>Success</AlertTitle>
            Label added successfully.
          </Alert>
        )
      }
      <AddLabelModal
        open={openAddLabelModal}
        handleClose={handleCloseAddLabelModal}
      />
      <div className="text-gray-300 flex">
        <div
          className="border border-b-gray-700 border-t-0 border-l-0 border-r-0 p-1"
          style={{ width: "100%" }}
        >
          Labels:
        </div>
        <div className="relative right-5 bottom-2 hover:bg-slate-500 rounded-full">
          <IconButton onClick={handleCloseAddLabelModal}>
            <Add className="text-gray-300" />
          </IconButton>
        </div>
      </div>

      <div className="flex flex-col w-40 text-gray-300 ">
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
      </div>
    </div>
  );
};

export default Labels;
