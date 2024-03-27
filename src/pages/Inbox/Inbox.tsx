import React, { useEffect, useState } from "react";
import InfoMessage from "../../components/InfoMessage";
import { useAppDispatch } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/store";
import { fetchToDos } from "../../redux/features/ToDo/fetchToDoSlice";
import Variants from "../../components/Skeleton";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  Button,
} from "@mui/material";
import { ArrowDropDownIcon } from "@mui/x-date-pickers";

const Inbox: React.FC = () => {
  const dispatch = useAppDispatch();
  const response = useAppSelector((state) => state.todos);

  useEffect(() => {
    dispatch(fetchToDos());
  }, [response.success, response.error]);

  return (
    <div>
      {response.loading ? (
        <Variants />
      ) : response.data ? (
        <div>
          {response.data.data?.map((item, index) => (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ArrowDropDownIcon />}
                aria-controls="panel2-content"
                id="panel2-header"
                className="border"
              >
                <Typography variant="h5">{item.title}</Typography>
              </AccordionSummary>
              <AccordionDetails className="flex-1">
                <Typography variant="body1">{item.description}</Typography>
                <Box>
                  {item.labels?.map((label, index) => (
                    <Button
                      key={index}
                      size="small"
                      variant="contained"
                      style={{
                        color: "#f1f1f1",
                        backgroundColor: `${label.color}`,
                        marginLeft: "1rem",
                      }}
                    >
                      {label.label}
                    </Button>
                  ))}

                  <input type={"date"} value={item.schedule} color={"black"} />
                </Box>
              </AccordionDetails>
            </Accordion>
          ))}
        </div>
      ) : (
        <InfoMessage />
      )}
    </div>
  );
};

export default Inbox;
