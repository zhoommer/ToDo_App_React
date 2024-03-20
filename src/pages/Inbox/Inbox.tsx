import React, { useEffect, useState } from "react";
import InfoMessage from "../../components/InfoMessage";
import { useAppDispatch } from "../../redux/app/store";
import { useAppSelector } from "../../redux/app/store";
import { fetchToDos } from "../../redux/features/ToDo/fetchToDoSlice";
import Variants from "../../components/Skeleton";

type Label = {
  id: number;
  label: string;
  color: string;
  toDoId: number;
};

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
            <div
              key={index}
              className="text-white border border-white mt-3 rounded p-2"
            >
              <div className="flex">
                <div>{item.schedule}</div>
                <div>{item.title}</div>
              </div>
              <div>{item.labels?.map((label: Label) => label.label)}</div>
            </div>
          ))}
        </div>
      ) : (
        <InfoMessage />
      )}
    </div>
  );
};

export default Inbox;
