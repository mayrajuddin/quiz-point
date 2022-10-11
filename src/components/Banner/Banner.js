import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Banner.css'
import bannerImg from '../../images/banner-img.png';
const Banner = () => {
    return (
        <div className='banner'>
            <Container className=' h-100'>
                <Row className='align-items-center' >
                    <Col sm={6} xs={12}>
                        <div className='banner-content'>
                            <p className='fs-4 text-dark'>An e-learning web portal is a website or application that lets you to deepen your knowledge in a specific field. This way of mastering new skills and learning new concepts .</p>
                        </div>
                    </Col>
                    <Col sm={6} className='d-none d-sm-block'>
                        <img src={bannerImg} alt="banner" />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;