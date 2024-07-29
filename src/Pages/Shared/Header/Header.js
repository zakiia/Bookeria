import React from "react";
import "./Header.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import logo from "../../../image/bookeria logo.png";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user] = useAuthState(auth);
  const handleSignOut = () => {
    signOut(auth);
  };
  return (
    <header>
      <Navbar collapseOnSelect expand="lg" sticky="top" className="backgroud ">
        <Container>
          <Navbar.Brand as={Link} to="/">
            <img height={70} src={logo} alt="" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="home#services">Services</Nav.Link>
              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
            </Nav>
            <Nav>
              {user ? (
                <button
                  className="btn btn link text-black text-decoration-none"
                  onClick={handleSignOut}
                >
                  Signout
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
