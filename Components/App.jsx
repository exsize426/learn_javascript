import React from 'react';
import { useState } from 'react';
import FirstComponent from "../Components/FirstComponent"
import Weather from './Weather';
import LikeCounter from './LikeCounter';



export default function App() {
    const [now, setNow] = useState(new Date()); 
    setInterval(() => setNow(new Date()), 1000)

    return (
        <div>
            <FirstComponent name = {'Dima'} date = {now.toLocaleString()}  />
            <Weather />
            <LikeCounter />
        </div>
    )
}


  
  

