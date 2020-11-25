import React from 'react'
import Navbar from '../NavBar';
import BarChart from '../Graphs/BarChart';
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
