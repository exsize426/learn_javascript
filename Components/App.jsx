import React, { useEffect } from 'react';
import { useState } from 'react';
import FirstComponent from "../Components/FirstComponent"
import Weather from './Weather';
import LikeCounter from './LikeCounter';
import Header from './Header';
import ModalSection from './ModalSection';



export default function App() {
    const [theme, setTheme] = useState(false)
    const [now, setNow] = useState(new Date()); 
    setInterval(() => setNow(new Date()), 1000)

    const change = () => {
        setTheme(!theme)
    }

    useEffect(() => {
         if (theme) {
            document.documentElement.classList.add("grey-btn");
            document.documentElement.classList.remove("blue-btn");
            
        } else {
            document.documentElement.classList.add("blue-btn");
            document.documentElement.classList.remove("grey-btn");
        }
    },[theme])


    return (
        <div className={theme ? "grey-btn" : "blue-btn"}>
            <Header changeTheme = {change} theme = {theme} date = {now.toLocaleString()}  />
            <FirstComponent name = {'Dima'}  />
            <Weather />
            <LikeCounter />
            <ModalSection />
        </div>
    )
}


  
  

