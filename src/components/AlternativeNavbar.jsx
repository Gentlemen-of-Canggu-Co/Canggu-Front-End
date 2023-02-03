import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Coco from "../assets/images/Coco.png"
import Nav from 'react-bootstrap/Nav';
import Logo from "../assets/images/logo.svg";
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";

function AlternativeNavbar (){
  const {
    isLoggedIn,
    user,
    logOutUser
  } = useContext(AuthContext);

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
          {isLoggedIn && <Nav.Link style={{marginRight:"10px"}} onClick={logOutUser}>Logout</Nav.Link>}

          </div>
          
        </Container>
      </Navbar>
    </>
    )
}

export default AlternativeNavbar