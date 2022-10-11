import React from 'react';
import './Error.css'
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';
const Error = () => {
    return (
        <div className='App error'>
            <div className='content'>
                <div>
                    <h4 className='text-capitalize tle'>page not found</h4>
                    <div className='d-flex justify-content-center align-items-center'>
                        <span>4</span>
                        <MagnifyingGlassIcon className='glass'></MagnifyingGlassIcon>
                        <span>4</span>
                    </div>
                    <div className='text-center'>
                        <Link to='/' className=' nav-link back-btn py-2 rounded text-capitalize btn-grad '> back home</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Error;