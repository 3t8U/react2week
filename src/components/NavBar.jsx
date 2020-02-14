import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import GoogleFontLoader from 'react-google-font-loader';
import { Link } from 'react-router-dom';

function NavBar(props) {
  var navBarAddStyles = {
    backgroundColor: 'black',
    fontWeight: 'bold',
    fontFamily: 'Ultra',
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
        <NavDropdown.Item href="#action/3.1"><Link to="/Menu">MENU</Link></NavDropdown.Item>
      </NavDropdown>
    </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="FLAVORS" id="collasible-nav-dropdown">
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
          <NavDropdown.Item href="#action/3.1"><Link to="/About">What is Fluoro Water</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>



      <Nav className="mr-auto">
        <NavDropdown title="EVENTS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"><Link to="/PortalSmashers">Portal Smashers</Link></NavDropdown.Item>
        </NavDropdown>
      </Nav>

      <Nav className="mr-auto">
        <NavDropdown title="PARTNERS" id="collasible-nav-dropdown">
          <NavDropdown.Item href="https://www.facebook.com/cascadiapsyscouts/">Cascadia Psy Scouts</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.1"><Link to="/Video">U.T.T.A. Chaos</Link></NavDropdown.Item>
          <NavDropdown.Item href="https://www.mixcloud.com/Space_Toilet_Radio/pantiestheclown-live-hindsight-2020/">pantiestheclown</NavDropdown.Item>
        </NavDropdown>
      </Nav>


    </Navbar.Collapse>
  </Navbar>
    </div>
  );
}




export default NavBar;
