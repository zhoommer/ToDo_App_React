import React from "react";
import { Route, Routes } from "react-router-dom";
import Inbox from "./pages/Inbox/Inbox";
import Labels from "./pages/Labels/Labels";
import Today from "./pages/Today/Today";
import Scheduled from "./pages/Scheduled/Scheduled";
import Crashed from "./pages/Crashed/Crashed";

const AppRouter = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Inbox />} />
        <Route path="/today" element={<Today />} />
        <Route path="/scheduled" element={<Scheduled />} />
        <Route path="/labels" element={<Labels />} />
        <Route path="/500" element={<Crashed />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
