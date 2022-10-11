import React from 'react';
import './Quiz.css';
import { Card, Col, } from 'react-bootstrap';
import QuizOption from '../quizOption/QuizOption';

const Quiz = (props) => {
    // console.log(props);
    const { question } = props;
    const { options } = question;
    return (
        <Col sm={6}>
            <Card className='cart'>
                <Card.Body>
                    <h2 className='fs-4 text-dark'> {question.question}</h2>

                    {
                        options.map(option => <QuizOption option={option}></QuizOption>)
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Quiz;