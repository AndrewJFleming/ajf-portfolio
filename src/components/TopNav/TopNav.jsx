import React, { useState } from "react";
import { Link } from "react-router-dom";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
} from "react-bootstrap";
import NavLogo from "../../images/ajf-logo.png";
import "./TopNav.css";

const TopNav = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} collapseOnSelect variant="dark" expand="lg">
      {/* <Container> */}
      <Navbar.Brand
        as={Link}
        to="/"
        onClick={handleCollapse}
        className="desktop-nav-logo"
      >
        <img
          src={NavLogo}
          height="50"
          className="d-inline-block align-top"
          alt="site logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        onClick={() => setExpanded(expanded ? false : "expanded")}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <NavDropdown title="Portfolio" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              <span className="bold-item">MERN Projects</span>
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              React Projects
            </NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.3">
              WP Custom Themes
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">About</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      {/* </Container> */}
    </Navbar>
  );
};

export default TopNav;
