import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { useContext } from "react"; 
import { AuthContext } from "../context/auth.context";
import brandLogo from "../assets/images/navbarLogo.jpg"



function AlternativeNavbar (){
  const {
    isLoggedIn,
    user,
    logOutUser
  } = useContext(AuthContext);

    return(

    <>
    <Navbar bg="black" variant="dark">
        <Container>
          <Navbar.Brand href="/">
            <img
              alt=""
              src={brandLogo}
              height= "60vh"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          {/* <div className="navbar" style={{display: "flex"}}> */}
          <Nav.Link style={{marginRight:"10px", color: "white"}} href="/spots">Browse Spots</Nav.Link>
          {/* {isLoggedIn && <Nav.Link style={{marginRight:"10px"}} onClick={logOutUser}>Logout</Nav.Link>} */}

          {/* </div> */}
          
        </Container>
      </Navbar>
    </>
    )
}

export default AlternativeNavbar