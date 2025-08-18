import React from "react"
import classes from "../Input/MyInput.module.css"

export default function MyInput (props) {

    return (
        <input {...props} className={classes.input} type="text" />
    )
}
