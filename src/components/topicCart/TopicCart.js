import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './topicCart.css'

const TopicCart = ({ topic }) => {
    const { logo, name, id } = topic
    return (
        <Col xm={12} md={5} className='g-4 mx-auto'>
            <Card className='p-2 bg-dark '>
                <Card.Img variant="top" src={logo} />
                <div className='d-flex justify-content-between align-items-center mt-4'>
                    <p className='fs-5 m-0 text-light'>{name}</p>
                    <Link to={`/quizes/${id}`} className='cart-btn '>start practice</Link>
                </div>
            </Card>
        </Col>
    );
};

export default TopicCart;