import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'
const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className='py-3 header'>
                <Container>
                    <Navbar.Brand href="home" className='fs-4 text-capitalize fw-bold text-dark'>Quiz point</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto nav-bar'>
                            <Link to='/' className='nav-link px-3 fs-5 text-capitalize'>topic</Link>
                            <Link to='/statistics' className='nav-link px-3 fs-5 text-capitalize'>statistics</Link>
                            <Link to='/blog' className='nav-link px-3 fs-5 text-capitalize'>blog</Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;