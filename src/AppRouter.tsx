import React from "react";
import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox/Inbox";
import Labels from "./pages/Labels/Labels";
import Today from "./pages/Today/Today";
import Scheduled from "./pages/Scheduled/Scheduled";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/today" element={<Today />} />
        <Route path="/scheduled" element={<Scheduled />} />
        <Route path="/labels" element={<Labels />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
