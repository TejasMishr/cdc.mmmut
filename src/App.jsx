import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./pages/Home/Home";
import Event from "./pages/Event/Events";
// import Projects from "./pages/Projects/Projects";
import Team from "./pages/Team/Team";
import Contact from "./pages/Contact/Contact";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";

// App component

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/codersclub.mmmut" exact component={Home} />
          <Route path="/codersclub.mmmut/event" exact component={Event} />
          {/* <Route path="/codersclub.mmmut/Projects" exact ={Projects} /> */}
          <Route path="/codersclub.mmmut/team" exact component={Team} />
          <Route path="/codersclub.mmmut/contact" exact component={Contact} />
          <Redirect to="/codersclub.mmmut/" />
        </Switch>
      </Router>
    </>
  );
}
