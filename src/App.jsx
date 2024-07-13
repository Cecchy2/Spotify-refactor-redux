import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";

import { BrowserRouter, Routes } from "react-router-dom";
import MySideBar from "./components/MySideBar";

function App() {
  return (
    <BrowserRouter>
      <MySideBar />
      <Routes></Routes>
    </BrowserRouter>
  );
}

export default App;
