import React from "react";
import { NavDropdown } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useSelector } from "react-redux";

export default function Header() {
  const cartData = useSelector((state) => state.addToCartReducers);
  const userdata = useSelector((state) => state.userLoginReducers);
  const { user } = userdata;
  const admin = user != null ? user.isAdmin : false;
  return (
    <>
      <Navbar
        bg="primary"
        variant="dark"
        expand="lg"
        className="shadow-lg p-3 mb-5"
      >
        <Container>
          <Navbar.Brand href="/">HealthCorner</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="m-auto">
              {!user && !admin && (
                <>
                  <Nav.Link href="/login">Login</Nav.Link>
                  <Nav.Link href="/cartpage">
                    Bag
                    <span className="bag">{cartData.cartItem.length}</span>
                  </Nav.Link>
                </>
              )}
              {user && admin && (
                <>
                  <Nav.Link href="/logout">Logout</Nav.Link>
                </>
              )}
              {user && !admin && (
                <>
                  <NavDropdown title={user.username} id="basic-nav-dropdown">
                    <NavDropdown.Item href="/order">My Orders</NavDropdown.Item>
                    <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="/cartpage">
                    Bag
                    <span className="bag">{cartData.cartItem.length}</span>
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
