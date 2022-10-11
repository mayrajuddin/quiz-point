import React from 'react';
import './Quiz.css';
import { Card, Col, } from 'react-bootstrap';
import QuizOption from '../quizOption/QuizOption';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Quiz = (props) => {
    const { question } = props;
    const { options, correctAnswer, } = question;
    const notify = (answer) => toast(answer);
    const ans = (value) => {
        if (value) {
            toast.success('correct answer')
        } else {
            toast.error('wrong answer')
        }
    };
    const showAns = ans => {
        notify(ans)
    }
    const showCorrectAns = correctAns => {
        if (correctAns === correctAnswer) {
            ans(true)
        } else {
            ans(false);
        }
    }
    return (
        <Col sm={6}>
            <Card className='cart'>
                <Card.Body>
                    <div className='d-flex justify-content-between align-items-center'>
                        <h2 className='fs-5 text-dark'> {question.question}</h2>
                        <Link onClick={() => showAns(correctAnswer)} className='show-icon'> <EyeIcon className='icon'></EyeIcon></Link>
                    </div>

                    {
                        options.map(option => <QuizOption option={option} qus={question} correctAns={showCorrectAns}></QuizOption>)
                    }
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Quiz;