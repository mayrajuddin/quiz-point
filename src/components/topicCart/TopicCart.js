import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './topicCart.css'
import { ChevronDoubleRightIcon } from '@heroicons/react/24/solid';

const TopicCart = ({ topic }) => {
    const { logo, name, id, total } = topic
    return (
        <Col xm={12} md={3} className='g-4 '>
            <Card className=' topic-card p-3'>
                <Card.Img variant="top" src={logo} />
                <div className='d-flex justify-content-between align-items-center my-2'>
                    <p className='fs-5 m-0 text-dark'>{name}</p>
                    <p>quiz {total}</p>
                </div>
                <Link to={`/quizes/${id}`} className='cart-btn text-center'>start practice <span> <ChevronDoubleRightIcon className='right-icon'></ChevronDoubleRightIcon></span></Link>
            </Card>
        </Col>
    );
};

export default TopicCart;