import React from "react";
import classes from "../Button/MyButton.module.css"

export default function Button ({children, ...props}) {

    return (
        <button {...props} className={classes.button}> {children}</button> // props.children - позволяет передавать текст в кнопку
    )
}