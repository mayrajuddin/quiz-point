// import React, { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import { Toaster } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const { data } = useLoaderData();
    const { total, questions, name } = data;
    return (
        <div>
            <Container>
                <h2>total quiz {total} </h2>
                <h3 className='text-center py-3 fs-3 text-capitalize'> quiz of {name}</h3>
                <Row className='g-4'>
                    {
                        questions.map(qus => <Quiz key={qus.id} question={qus}></Quiz>)
                    }
                    <Toaster></Toaster>
                </Row>
            </Container>
        </div>
    );
};

export default Quizes;