import React from "react";
import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox/Inbox";
import Labels from "./pages/Labels/Labels";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/labels" element={<Labels />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
