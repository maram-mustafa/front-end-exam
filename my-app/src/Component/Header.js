import React from "react";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand>My App</Navbar.Brand>
          <Link to="/">Home</Link>
          <Link to="/fav">Fav</Link>
        </Navbar>
      </div>
    );
  }
}

export default Header;
