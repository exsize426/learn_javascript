import React, { useEffect } from 'react';
import { useState } from "react"
import  "./ListCars.css"
import ListCar from './ListCar';



export default function PostList ({post, title}) {
    

    return (
        <div>
            <h1 style={{textAlign: 'center'}}>
                {title}
            </h1>
            {post.map((post, index) => 
                <ListCar number={index + 1} post={post} key={post.id} />
            )}
        </div>
    )
}