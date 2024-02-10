import React, { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import {
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "../../redux/app/store";
import { fetchLabels } from "../../redux/features/Labels/labelSlice";

const checkboxColors = [
  "#4e79a7",
  "#f28e2c",
  "#e15759",
  "#76b7b2",
  "#59a14f",
  "#edc949",
  "#af7aa1",
  "#ff9da7",
  "#9c755f",
  "#bab0ab",
];

const Labels: React.FC = () => {
  const [selectedCheckbox, setSelectedChecbox] = useState<number[]>([]);
  const dispatch = useAppDispatch();
  const labels = useAppSelector((state) => state.labels)

  useEffect(() => {
    dispatch(fetchLabels())
  }, [])

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
      <div className="text-gray-300 flex">
        <div
          className="border border-b-gray-700 border-t-0 border-l-0 border-r-0 p-1"
          style={{ width: "100%" }}
        >
          Labels:
        </div>
        <div className="relative right-5 bottom-2 hover:border rounded-full border-gray-500 ease-in duration-300">
          <IconButton>
            <Add className="text-gray-300" />
          </IconButton>
        </div>
      </div>

      <div className="flex flex-col w-10 text-gray-300">
        <FormGroup>
          {labels.data?.map((label, index) => (
            <FormControlLabel
              key={index + 1}
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
