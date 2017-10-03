import React, {Component} from 'react';
import './Sliders.css';


export default class Sliders extends Component{
    render(){
        return(
            <div id="sliders">
                <div class="slider-items">
                    <a href="javascript:;">
                        <img src="http://cssslider.com/sliders/demo-17/data1/images/picjumbo.com_hanv9909.jpg" />
                    </a>
                </div>
                <div class="slider-items">
                    <a href="javascript:;">
                        <img src="http://wowslider.com/sliders/demo-18/data1/images/shanghai.jpg" />
                    </a>
                </div>
            </div>
        );
    }
}