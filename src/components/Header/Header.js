import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" collapseOnSelect expand="lg" className='py-4'>
                <Container>
                    <Navbar.Brand href="home" className='fs-5 text-capitalize'>quiz </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className='ms-auto'>
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