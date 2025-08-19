import React, { useEffect } from 'react';
import { useState } from "react"
import  "./ListCars.css"
import MyButton from "./Button/MyButton"


export default function ListCar (props) {
    

    return (
        <div className="list">
            <div className="post">
                <div className="post__content">
                    <strong>{props.number} {props.post.title}</strong>
                    <div className="post__body">{props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <MyButton onClick={() => props.remove(props.post)}>Удалить</MyButton>
                </div>
            </div>
        </div>
    )
}