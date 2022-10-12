import React from 'react';
import './Blog.css'
import { Col, Container, Row } from 'react-bootstrap';

const Blog = () => {
    return (
        <Container>
            <h2 className='fs-2 text-capitalize py-3 my-3 ms-3 text-center'>Blog</h2>
            <Row className='g-4'>
                <Col sm={10} className='p-4 mx-auto blog-card rounded border'>
                    <h4 className='py-2'>1. How context api works in React?</h4>
                    <p> Context provides a way to pass data through the component tree from parent to child components, without having to pass props down manually at each level. Each component in Context is context-aware. Essentially, instead of passing props down through every single component on the tree, the components in need of a prop can simply ask for it, without needing intermediary helper components that only help relay the prop.</p>
                </Col>
                <Col sm={10} className='p-4 mx-auto blog-card rounded border'>
                    <h4 className='py-2'>2. Purpose of React Router.</h4>
                    <p>React Router, allows us to build a single-page web application with navigation without the page refreshing as the user navigates. React Router uses component structure to call components, which display the appropriate information.</p>
                </Col>
                <Col sm={10} className='p-4 mx-auto blog-card rounded border'>
                    <h4 className='py-2'>3. How does useRef work in React?</h4>
                    <p> The useRef Hook is a function that returns a mutable ref object whose .current property is initialized with the passed argument (initialValue). The returned object will persist for the full lifetime of the component.</p>
                </Col>
            </Row>
        </Container>
    );
};

export default Blog;