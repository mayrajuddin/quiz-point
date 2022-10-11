import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Quizes = () => {
    const { data } = useLoaderData();
    console.log(data);
    const { total, questions } = data;
    return (
        <div>
            <h2>total quiz  here {total} </h2>
            {
                questions.map(qus => <li key={qus.id}>{qus.question}</li>)
            }
        </div>
    );
};

export default Quizes;