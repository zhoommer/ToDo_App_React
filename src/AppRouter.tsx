import React from "react";
import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox/Inbox";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inbox />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
