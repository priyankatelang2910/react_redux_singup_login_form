import { useDispatch, useSelector } from "react-redux";
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import Button from 'react-bootstrap/Button';
import { logOut } from "../services/actions/actions";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

const Layout = () => {
  // ------------redux start----------------------
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.newUsers.isLoggedIn);
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const handleLogout = (e) => {
    e.preventDefault(); // prevent default behavior

    dispatch(logOut());
    navigate("/");
    setShow(false); // Close Offcanvas after logout
  };
// ------------redux end----------------------
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleMenuItemClick = (path) => {
    navigate(path);
    setShow(false); // Close Offcanvas on menu item click
  };
// -------------------------

  return (
    <>
      <ToastContainer />      
      {['lg'].map((expand) => (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
          <Container>
            <Navbar.Brand href="/">Textbook</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} onClick={handleShow} />
            <Navbar.Offcanvas 
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              show={show}
              onHide={handleClose}
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Textbook11
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <ul className="nav nav-pills navbar-nav ms-auto">
                  <li className="nav-item">
                    <Link to="/"  className="nav-link" onClick={() => handleMenuItemClick("/")}>Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/page1" className="nav-link" onClick={() => handleMenuItemClick("/page1")}>Page1</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/page2" className="nav-link" onClick={() => handleMenuItemClick("/page2")}>Page2</Link>
                  </li>

                  {!isLoggedIn ? (
                    <>
                      <li className="nav-item">
                        <Link to="/login" className="nav-link" onClick={() => handleMenuItemClick("/login")}>Login</Link>
                      </li>
                      <li className="nav-item">
                        <Link to="/signup" className="nav-link" onClick={() => handleMenuItemClick("/signup")}>SignUp</Link>
                      </li>
                    </>
                  ) : (
                    <li className="nav-item">
                      <Button variant="success" onClick={handleLogout}>Logout</Button>
                    </li>
                  )}
                </ul>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      <Outlet />
    </>
  );
};

export default Layout;
