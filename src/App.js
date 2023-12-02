import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={<ListEmployee />} />
          <Route path="/employees" element={<ListEmployee />} />
          <Route path="/add-employee" element={<AddEmployee />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
