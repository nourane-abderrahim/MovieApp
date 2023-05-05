import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation = ({settext}) => {
    return (
        <Navbar bg="dark" expand="lg" variant='dark' className='navbares'>
              <Container fluid>
                <Navbar.Brand href="#" style={{color:"red",fontFamily:"-moz-initial",fontSize:"50px",fontStyle:"oblique"}}>NETFLIX</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                  <Nav
                    className="me-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    navbarScroll>
                  
                  </Nav>
                  <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
             style={{backgroundColor:"black", border:"white", color:"white"}}
             onChange={(e)=>settext(e.target.value)}
             />
            <Button variant="outline-success" style={{background:"red", border:"none",color:"white"}}>Search</Button>
          </Form>
                </Navbar.Collapse>
              </Container>
            </Navbar>
          )
}

export default Navigation
