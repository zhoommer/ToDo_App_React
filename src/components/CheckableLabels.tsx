import { Checkbox, FormControlLabel, FormGroup } from "@mui/material";
import React, { useState } from "react";
import { useAppSelector } from "../redux/app/store";

const CheckableLabels: React.FC = () => {
  const labels = useAppSelector((state) => state.labels);
  const [selectedCheckbox, setSelectedChecbox] = useState<number[]>([]);
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
    </div>
  );
};

export default CheckableLabels;
