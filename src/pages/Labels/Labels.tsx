import React from "react";
import { Add } from "@mui/icons-material";
import {
  IconButton,
  Checkbox,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import { pink } from "@mui/material/colors";

const label = { inputProps: { "aria-label": "Checkbox demo" } };

const Labels: React.FC = () => {
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
            <Add className="text-gray-300"/>
          </IconButton>
        </div>
      </div>

      <div className="flex flex-col w-10 text-gray-300">
        <FormGroup>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="Work"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="School"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Delegated"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Home"
          />
          <FormControlLabel
            control={<Checkbox color="secondary" />}
            label="Follow up"
          />
        </FormGroup>
      </div>
    </div>
  );
};

export default Labels;
