import React from "react";
import { useState } from "react";


export default function Header () {
    const [theme, setTheme] = useState(false)

    const change = () => {
        setTheme(!theme)
    }

    const isColor = theme ? 'grey-btn': 'blog-header';

    return (
        <header 
            className={isColor}
        >
            <div>
            Info
            <button 
                onClick={change} 
                
            > Put
            </button>
            </div>
        
        </header>
    ) 
}