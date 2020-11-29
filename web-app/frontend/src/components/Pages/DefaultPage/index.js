import React from 'react'
import Navbar from '../../NavBar';
import './DefaultPage.css';

const DefaultPage = (props) => {

    return(
        <div className='dafault_page'>
            <div className='main'>
                {props.children}
            </div>
            <Navbar className="nav" />
        </div>
    )


}

export default DefaultPage;
