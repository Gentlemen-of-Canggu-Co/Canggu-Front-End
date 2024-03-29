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
        <Navbar.Brand style={{marginLeft: "5vw"}} href="/">
            <img
              alt="Chunks of Canggu Logo"
              src={brandLogo}
              height= "40vh"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          <Nav.Link style={{ color: "white"}} href="/spots">Browse Spots</Nav.Link>
          <Nav.Link style={{ color: "white"}} href="/toplists">Toplists</Nav.Link>
          <Nav.Link style={{marginRight: "5vw", color: "white"}} href="https://www.instagram.com/chunksofcanggu/"><img
              alt="Chunks of Canggu Logo"
              src="https://res.cloudinary.com/dki0gzjzg/image/upload/v1681357838/1200px-Instagram.svg_ujdsiw.png"
              height= "40vh"
              className="d-inline-block align-top"
            />{' '}</Nav.Link>

          
        </Container>
      </Navbar>
    </>
    )
}

export default AlternativeNavbar