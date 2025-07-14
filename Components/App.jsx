import React from 'react';
import FirstComponent from "../Components/FirstComponent"
import Weather from './Weather';
import { useState } from 'react';

export default function App() {
    const [now, setNow] = useState(new Date()); 
    setInterval(() => setNow(new Date()), 1000)

    return (
        <div>
            <FirstComponent name = {'Dima'} date = {now.toLocaleString()} />
            <Weather />
        </div>
    )
}


  
  

