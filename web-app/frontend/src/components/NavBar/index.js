import React, { Component } from 'react';
import {MenuItems} from './MenuItems/MenuItems';
import './Navbar.css';

class Navbar extends Component {

    state = { bars_clicked: false }

    handleClick = () => {
        this.setState({ bars_clicked: !this.state.bars_clicked })
    }



    render() {
        return(
            <nav className="NavbarItems">
                <div className="menu-icon" onClick={this.handleClick}>
                    <i className={this.state.bars_clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.bars_clicked ? 'nav-menu active' : 'nav-menu'}>
                    {MenuItems.map((item, key) => {
                        return (
                            <li key={key} className="listItem">
                                <a className={item.cName}
                                href={item.url}
                                >
                                    {item.title}
                                </a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar;