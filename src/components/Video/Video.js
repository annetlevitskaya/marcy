import React, { Component } from 'react';
import './Video.css';

export default class Video extends Component {
    render() {
        return (
            <div className="video">
                <button className="video__play">
                    <img src="../play.png" className="videp__play_img"></img>
                </button>
            </div>  
        )
    }
}