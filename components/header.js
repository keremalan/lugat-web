import React from 'react';
import '../assets/style.css';
import Nav from './nav';

const Header = (props) => (
    <>
    <header>
        <div className='header-brand'><img className='header-img' src={props.image}/></div>
        <div className='header-nav'>
            <Nav />
        </div>
    </header>
    </>
)

export default Header;