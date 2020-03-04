import React, { Component } from 'react';
import './Content.css';

export default class Content extends Component {
    render() {
        return (
            <div className="content">
                <p className="content__label">Travel</p>
                <h3 className="content__caption">
                    Donec sed odio dui. Cras mattis consectetur purus sit amet fermentum. 
                </h3>
                <div className="content__img"></div>
                <p className="content__text">
                    Donec aredsed odio dui. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Donec ullamcorper nulla non metus auctor fringilla.
                </p>
                <p className="content__text">
                    Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum. 
                </p>
                <button className="content__btn">
                    full story
                </button>
            </div>  
        )
    }
}