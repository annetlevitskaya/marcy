import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <form className="footer__form">
                    <span className="footer__text">
                        Like what you're reading? Get weekly updates that will help you grow as a designer.
                    </span>
                    <div className="footer__form_inputs">
                        <input className="footer__form_info" type="text" placeholder="name" />
                        <input className="footer__form_info" type="mail" placeholder="email" />
                    </div>
                    <button className="footer__btn">Subscribe</button>
                </form>
            </footer> 
        )
    }
}