import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import NavbarBS from "react-bootstrap/Navbar";

function Navbar() {
  return (
    <NavbarBS bg="light" expand="lg">
      <Container>
        <NavbarBS.Brand href="/">Chunks of Canggu</NavbarBS.Brand>
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
