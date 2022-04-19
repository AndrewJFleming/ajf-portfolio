import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import { projectRows } from "../../data.js";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import NavLogo from "../../assets/images/ajf-logo.png";
import "./TopNav.css";

const TopNav = () => {
  const [expanded, setExpanded] = useState(false);

  const handleCollapse = () => {
    setExpanded(false);
  };

  return (
    <Navbar expanded={expanded} collapseOnSelect variant="dark" expand="lg">
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
          <Nav.Link as={Link} to="/portfolio">
            All Projects
          </Nav.Link>
          <NavDropdown title="Portfolio Categories" id="basic-nav-dropdown">
            {projectRows
              .filter((projectRow) => projectRow.type !== "wp")
              .map((filteredProjectRow) => (
                <NavDropdown.Item
                  as={Link}
                  to={`/categories/${filteredProjectRow.type}`}
                >
                  <span
                    className={`${
                      filteredProjectRow.type === "mern" && "bold-item"
                    }`}
                  >
                    {filteredProjectRow.title}
                  </span>
                </NavDropdown.Item>
              ))}
            <NavDropdown.Divider />
            <NavDropdown.Item as={Link} to="/categories/wp">
              WP Custom Themes
            </NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about">
            About
          </Nav.Link>
          <Nav.Link as={Link} to="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default TopNav;
