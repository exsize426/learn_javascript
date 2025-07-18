import React from 'react';
import { useState } from 'react';
import FirstComponent from "../Components/FirstComponent"
import Weather from './Weather';
import LikeCounter from './LikeCounter';
import Header from './Header';



export default function App() {
    const [now, setNow] = useState(new Date()); 
    setInterval(() => setNow(new Date()), 1000)

    return (
        <div>
            <Header />
            <FirstComponent name = {'Dima'} date = {now.toLocaleString()}  />
            <Weather />
            <LikeCounter />
        </div>
    )
}


  
  

