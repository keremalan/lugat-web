import React from 'react';
import '../assets/style.css';

const Link = (props) => (
    <>
        <a className='link-a' href={props.linkUrl}>{props.linkText}</a>
    </>
)

export default Link;