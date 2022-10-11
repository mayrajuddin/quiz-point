import React from 'react';
import './QuizOption.css'
const QuizOption = ({ option }) => {
    return (
        <button className='option-btn p-3 border my-3 rounded '>{option}</button>
    )
};

export default QuizOption;