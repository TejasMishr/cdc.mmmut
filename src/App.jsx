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
          <Route path="/cdc.mmmut" exact component={Home} />
          <Route path="/cdc.mmmut/event" exact component={Event} />
          {/* <Route path="/cdc.mmmut/Projects" exact ={Projects} /> */}
          <Route path="/cdc.mmmut/team" exact component={Team} />
          <Route path="/cdc.mmmut/contact" exact component={Contact} />
          <Redirect to="/cdc.mmmut/" />
        </Switch>
      </Router>
    </>
  );
}
