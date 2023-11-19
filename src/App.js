import React from "react";
import ListEmployee from "./components/ListEmployee";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <div className="container">
        <ListEmployee />
      </div>
      <Footer />
    </>
  );
};

export default App;
