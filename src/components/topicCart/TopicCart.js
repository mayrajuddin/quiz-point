import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import './topicCart.css'

const TopicCart = ({ topic }) => {
    const { logo, name } = topic
    return (
        <Col xm={12} md={5} className='g-4 mx-auto'>
            <Card className='p-2 bg-dark'>
                <Card.Img variant="top" src={logo} />
                <div className='d-flex justify-content-between align-items-center'>
                    <p className='fs-5 m-0 text-light'>{name}</p>
                    <Button className='cart-btn px-4'>Start Practice</Button>
                </div>
            </Card>
        </Col>
    );
};

export default TopicCart;