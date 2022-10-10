import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='d-flex justify-content-between'>
            <div>
                <h2>logo</h2>
            </div>
            <nav className='navbar'>
                <Link to='/' className='nav-link px-3 fs-5 text-capitalize'>topic</Link>
                <Link to='/stactic' className='nav-link px-3 fs-5 text-capitalize'>statistics</Link>
                <Link to='/blog' className='nav-link px-3 fs-5 text-capitalize'>blog</Link>
            </nav>
        </div>
    );
};

export default Header;