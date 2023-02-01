import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Coco from '../assets/images/Coco.png';
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const {
    isLoggiedIn,
    user,
    logOutUser
  } = useContext(AuthContext);

  return (
    <NavbarBS bg="light" expand="lg">
      <Container>
        <NavbarBS.Brand href="/"><img src={Coco} alt="COCO"/></NavbarBS.Brand>
        <NavbarBS.Toggle aria-controls="basic-navbar-nav" />
        <NavbarBS.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/spots">Spots</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;
