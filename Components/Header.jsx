import React from "react";
import { useState } from "react";
import logo from "../img/info.png"


export default function Header (props) {
    const isColor = props.theme ? 'blue-btn': 'blog-header';


    return (
        <header 
            className={isColor}
        >
            <div className="header-info">
                <img src={logo} alt="logo-info" className="header-logo"/>
                <span>Info</span>
            <button 
                className="button-header"
                onClick={props.changeTheme} 
                
            > Тема
            </button>
            <span className="header-time">Время и дата: {props.date}</span>
            </div>
        
        </header>
    ) 
}