import React, { Component } from 'react';
import './Header.css';

export default class Header extends Component {
    render() {
        return (
            <div className="container">
                <div className="header__label">
                    Marcy..
                </div>
                <div className="header">
                    <nav className="header__menu">
                        <span />
                        <span />
                        <span />
                    </nav>
                    <div className="header__caption">story</div>
                </div>
            </div>
        )
    }
}