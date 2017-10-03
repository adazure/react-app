import React, { Component } from 'react';
import './Menu.css';

export default class Menu extends Component{
    render(){
        return (
            <div>
            <ul class="menu-items">
                <li><a href="javascript:;">Home Page</a></li>
                <li><a href="javascript:;">Products</a></li>
                <li><a href="javascript:;">About Us</a></li>
                <li><a href="javascript:;">Contact Us</a></li>
            </ul>
            </div>
        );
    }
}
