import React from 'react';
import './Home.css'
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import TopicCart from '../topicCart/TopicCart';
import Banner from '../Banner/Banner';

const Home = () => {
    const loaderData = useLoaderData([]);
    const { data } = loaderData;
    return (
        <div className='topic'>
            <Banner></Banner>
            <Container className='mb-5'>
                <h2 className='fs-2 text-uppercase py-3 tittle'> quiz Topics</h2>
                <Row>
                    {
                        data.map(topic => <TopicCart key={topic.id} topic={topic}></TopicCart>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Home;