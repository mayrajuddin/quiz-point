import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className='fot'>
            <Container>
                <p className='text-center py-4 m-0 fs-3 text-capitalize'> &copy; <span className='fw-bold'>  quiz point |</span> all Right Reserved. </p>
            </Container>
        </div>
    );
};

export default Footer;