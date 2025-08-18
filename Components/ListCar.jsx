import React, { useEffect } from 'react';
import { useState } from "react"
import  "./ListCars.css"


export default function ListCar (props) {
    

    return (
        <div className="list">
            <div className="post">
                <div className="post__content">
                    <strong>{props.number} {props.post.title}</strong>
                    <div className="">{props.post.body}
                    </div>
                </div>
                <div className="post__btns">
                    <button>Удалить</button>
                </div>
            </div>
        </div>
    )
}