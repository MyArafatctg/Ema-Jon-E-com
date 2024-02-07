import React from 'react';
import './Header.css';
import Blog from '../Blog/Blog';

const Header = () => {
    return (
        <div className="header-container navbar bg-base-100">
            <div className="header">
                <p className='btn btn-ghost normal-case text-3xl'>Knowledge Cafe</p>
                <img src="arafat.jpg" alt="" />
            </div>
            <hr className='border-t-2 border-gray-300 mt-4' />
            <Blog></Blog>
        </div>
    );
};

export default Header;