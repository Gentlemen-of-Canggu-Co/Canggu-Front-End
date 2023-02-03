import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";
import Coco from '../assets/images/Coco.png';
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";

function Navbar() {
  const {
    isLoggedIn,
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
            <Nav.Link className="nav-font" href="/spots" style={{marginRight: "10px"}}>Spots</Nav.Link>
            <Nav.Link className="nav-font" href="/events" style={{marginRight: "10px"}}>Events</Nav.Link>
          </Nav>
        </NavbarBS.Collapse>
      </Container>
    </NavbarBS>
  );
}

export default Navbar;
