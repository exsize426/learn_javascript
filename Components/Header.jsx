import React from "react";
import { useState } from "react";


export default function Header (props) {
    
    const isColor = props.theme ? 'blue-btn': 'blog-header';

    return (
        <header 
            className={isColor}
        >
            <div>
            Info
            <button 
                className="button-header"
                onClick={props.changeTheme} 
                
            > Тема
            </button>
            </div>
        
        </header>
    ) 
}