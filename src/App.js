import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

import ListEmployee from "./components/ListEmployee";
import Header from "./components/Header";
import Footer from "./components/Footer";
import AddEmployee from "./components/AddEmployee";
import UpdateEmployee from "./components/UpdateEmployee";

const App = () => {
  return (
    <Router>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/" exact component={ListEmployee}></Route>
          <Route path="/employees" component={ListEmployee}></Route>
          <Route path="/add-employee" component={AddEmployee}></Route>
          <Route path="/update-employee/:id" component={UpdateEmployee}></Route>
        </Switch>
      </div>
      <Footer />
    </Router>
  );
};

export default App;
