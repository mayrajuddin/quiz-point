import React from 'react';
import './Topic.css'
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import TopicCart from '../topicCart/TopicCart';

const Topic = () => {
    const loaderData = useLoaderData([]);
    const { data } = loaderData;
    return (
        <div className='topic'>
            <Container>
                <h2>this is Topic {data.length}</h2>
                <Row>
                    {
                        data.map(topic => <TopicCart key={topic.id} topic={topic}></TopicCart>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Topic;