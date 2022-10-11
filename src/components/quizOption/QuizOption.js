import React from 'react';
import './QuizOption.css'
const QuizOption = ({ option, correctAns }) => {
    return (
        <button className='option-btn p-3 border-0 my-3 rounded ' onClick={() => correctAns(option)}> {option}</button>
    )
};

export default QuizOption;