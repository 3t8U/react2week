import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';


function NavBar(props) {
  var navBarAddStyles = {
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontFamily: 'BowlbyOneSC',
    width: '80%',
    margin: '0 auto'


   };
  return (
    <div style={navBarAddStyles}>
    <Navbar collapseOnSelect expand="lg" bg="black" variant="dark">
    <Navbar.Brand href="#home"> Fluoro Water</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">

      <Nav className="mr-auto">
        <NavDropdown title="MENU" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Green</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Pink</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Red</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Yellow</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Blue</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Purple</NavDropdown.Item>

        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="ABOUT" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">What is Fluoro Water</NavDropdown.Item>

        </NavDropdown>
      </Nav>

      

      <Nav className="mr-auto">
        <NavDropdown title="EVENTS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Portal Smashers</NavDropdown.Item>

      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="PARTNERS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Cascadia Psy Scouts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1">U.T.T.A. Chaos</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">pantiestheclown</NavDropdown.Item>
        </NavDropdown>
      </Nav>


    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default NavBar;
