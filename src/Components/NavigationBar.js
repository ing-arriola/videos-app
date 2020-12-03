import React from "react";
import { Container, Navbar, Nav, Form } from "react-bootstrap";
import Search from "./Search";
const NavigationBar = ({ onTermSubmit }) => {
  return (
    <Navbar variant="dark" bg="dark" expand="lg" fixed="top">
      <Container>
        <Nav.Link
          className="navbar-brand cursor nav-link"
          onClick={() => onTermSubmit("")}
        >
          JDevTube
        </Nav.Link>
        <Search onSumbmit={onTermSubmit} />
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
