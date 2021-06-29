import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './components/Home';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Login from "./components/authentication/Login";
import Register from "./components/authentication/Register";
import Logout from "./components/authentication/Logout";
import Companies from "./components/Companies";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/logout" component={Logout} />
        <Route exact path="/companies" component={Companies} />
      </Router>
      <Footer />
    </React.Fragment>
  );
}

export default App;
