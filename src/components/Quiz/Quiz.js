import React, { useState } from 'react';
import './Quiz.css';
import { Card, Col, Form } from 'react-bootstrap';
import { EyeIcon } from '@heroicons/react/24/solid';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const Quiz = (props) => {
    const { question } = props;
    const { options, correctAnswer, id } = question;
    const [open, setOpen] = useState(false)
    const ans = (value) => {
        if (value) {
            toast.success('correct answer')
        } else {
            toast.error('wrong answer')
        }
    };
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
                        <Link onClick={() => setOpen(!open)} className='show-icon'> <EyeIcon className='icon'>
                        </EyeIcon></Link>
                    </div>
                    <Form>
                        <div className={`${open ? 'd-block' : 'd-none'} ans-div`}>
                            <p className='ms-2 p-2 py-3 text-center'> Correct Ans is : <span className='text-bold'>{correctAnswer}</span></p>
                        </div>
                        {
                            options.map((option) => (
                                <div key={option} className='option-div  border-0 my-3 rounded d-flex ' id={id}>
                                    <input type="radio" id={option} value={option} className='ms-3' name={id} />
                                    <label htmlFor={option} className='p-2 py-3 col' onClick={() => showCorrectAns(option)}>{option}
                                    </label>
                                </div>
                            ))
                        }
                    </Form>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Quiz;