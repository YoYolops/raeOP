import React from 'react'
import './Dropdown.css';

const Dropdown = (props) => {
    return(
        <ul className={props.className}>
            {props.children}
        </ul>
    )
}

export default Dropdown;