import React from 'react';
import { Container, Row } from 'react-bootstrap';
import { useLoaderData } from 'react-router-dom';
import Quiz from '../Quiz/Quiz';

const Quizes = () => {
    const { data } = useLoaderData();
    // console.log(data);
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
                </Row>
            </Container>
        </div>
    );
};

export default Quizes;