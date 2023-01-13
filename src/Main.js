import React from "react";

import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./views/home";
import NotFound from "./views/notFound";

const Main = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Main;
