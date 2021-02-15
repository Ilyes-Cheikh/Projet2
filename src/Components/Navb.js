import react from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import { Link } from "react-router-dom";

function Navb() {
    return(
        <Navbar bg="light" expand="lg">
  <Navbar.Brand>
    <Link to='/' style={{color:"black"}}> Clothes Store </Link>
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto" style={{marginLeft:'75%'}}>
      <Link className="ml-5" to="/" style={{color:'blue'}}  >Home</Link>
      <Link  className="ml-5" to="Men" style={{color:'blue'}}>Men</Link>
      <Link  className ="ml-5" to="Women" style={{color:'blue'}}>Women</Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
    );
}
export default Navb;