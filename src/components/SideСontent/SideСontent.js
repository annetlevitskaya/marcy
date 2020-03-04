import React, { Component } from 'react';
import './SideСontent.css';

export default class SideСontent extends Component {
    render() {
        return (
            <div className="SideСontent">
                <p className="SideСontent__label">travel</p>
                <div className="SideСontent__box">
                    <div className="SideСontent__left">
                        <h3 className="SideСontent__caption">
                            Nullam id dolor id nibh ultricies vehicula ut id elit. 
                        </h3>
                        <p className="SideСontent__text">
                            Etiam porta sem malesuada magna mollis euismod. Maecenas faucibus mollis interdum. Donec id elit non mi porta gravida at eget metus. 
                        </p>
                        <p className="SideСontent__text">
                            Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        </p>
                        <button className="SideСontent__btn">
                            Full Story
                        </button>
                    </div>
                    <div className="SideСontent__right">
                        <span className="SideСontent__main_img"></span>
                        <span className="SideСontent__img"></span>
                    </div>
                </div>
            </div>  
        )
    }
}