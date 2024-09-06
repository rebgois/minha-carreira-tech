import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Select from "./pages/Select/Select";
import Info from "./pages/Info/Info";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Select />} />
        <Route path="/info/:id" element={<Info />} />
      </Routes>
    </Router>
  );
};

export default App;
