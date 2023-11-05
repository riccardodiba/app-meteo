import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import {Heart,GlobeAmericas,GeoAlt,InfoCircle}  from "react-bootstrap-icons"

function MyNav() {
  return (
      <Navbar variant="dark" expand="lg" style={{ backgroundColor: '#faea01' }} >
      <Container>
         <Navbar.Brand className='me-2'>
          <img
            src="assest/logo.png"
            alt="logo"
            style={{ width: '50px', height: '55px' }}
             className='me-2'
          />

         <span className='text-dark'>Earth Weather</span> 

        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" variant="dark"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto text-dark" >
            <Nav.Link href="#home" className='text-dark'>Home</Nav.Link>
            <Nav.Link href="#link"className='text-dark' >Link</Nav.Link>
            <NavDropdown title="Menù" id="basic-nav-dropdown" className='bg-warning' >
              <NavDropdown.Item href="#action/3.1" className='text-dark'>Previsioni Italia <GlobeAmericas className="text-dark ms-2" />  </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">
                Preferiti <Heart  className="text-dark ms-2" />
              </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Posizione <GeoAlt className="text-dark ms-2" /> </NavDropdown.Item>
                <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Info <InfoCircle className="text-dark ms-2" />
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNav;