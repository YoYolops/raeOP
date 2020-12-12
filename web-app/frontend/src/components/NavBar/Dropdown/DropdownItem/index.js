import React from 'react'
import './DropdownItem.css';
import { NavLink } from 'react-router-dom';

const DropdownItem = (props) => {
    return (
        <li className='listItem'>
            <a href={props.href} className='drop-link'>
                {props.children}
            </a>
        </li>
    );
};

export default DropdownItem;