import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Coco from "../assets/images/Coco.png"
import Nav from 'react-bootstrap/Nav';

function AlternativeNavbar (){

    return(

    <>
    <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={Coco}
              width="60"
              height="30"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <div style={{display: "flex"}}>
          <Nav.Link style={{marginRight:"10px"}} href="/spots">Spots</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
          </div>
          
        </Container>
      </Navbar>
    </>
    )
}

export default AlternativeNavbar