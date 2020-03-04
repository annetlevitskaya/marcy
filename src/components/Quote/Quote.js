import React, { Component } from 'react';
import './Quote.css';

export default class Quote extends Component {
    render() {
        return (
            <div className="quote">
                <div className="quote__box">
                    <img className="quote__img"></img>
                    <div className="quote__right">
                        <span className="quote__label">quote</span>
                        <h3 className="quote__right_caption">
                            Nullam id dolor id nibh ultricies vehicula elit. 
                        </h3>
                    </div>
                </div>
                <div className="quote__container">
                    <div className="quote__text">
                        “Donec id elit non mi porta gravida at eget metus. Vestibulum id ligula porta felis euismod semper. Curabitur blandit tempus porttitor”
                    </div>
                    <div className="quote__info">
                        <span className="quote__info_name">
                            VEN diesel 
                        </span>
                        <span className="quote__info_date">
                            1962-2006
                        </span>
                    </div>
                    <button className="quote__btn">
                        Full Story
                    </button>
                </div>
            </div>  
        )
    }
}