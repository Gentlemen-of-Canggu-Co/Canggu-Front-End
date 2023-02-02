import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Coco from "../assets/images/Coco.png"
import Nav from 'react-bootstrap/Nav';
import Logo from "../assets/images/logo.svg"

function AlternativeNavbar (){

    return(

    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Logo}
              width="60"
              height="40"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <div className="navbar" style={{display: "flex"}}>
          <Nav.Link style={{marginRight:"10px"}} href="/spots">Spots</Nav.Link>
            <Nav.Link style={{marginRight:"10px"}} href="/events">Events</Nav.Link>
          </div>
          
        </Container>
      </Navbar>
    </>
    )
}

export default AlternativeNavbar