import React, { useEffect } from 'react';
import { useState } from 'react';
import FirstComponent from "../Components/FirstComponent"
import Weather from './Weather';
import LikeCounter from './LikeCounter';
import Header from './Header';
import ModalSection from './ModalSection';
import PostCar from './PostCar';
import ComponentFormPost from './ComponentFormPost';



export default function App() {
    const [theme, setTheme] = useState(false)
    const [now, setNow] = useState(new Date()); 
    const [post, setPost] = useState([
        {id: 1, title: "Kia", body: "Kia Corporation — южнокорейская автомобилестроительная компания. Основана в декабре 1944 года"},
        {id: 2, title: "Toyota", body: "Toyota Motor Corporation – самая крупная автомобилестроительная корпорация Японии. Компания производит легковые и грузовые автомобили, а также автобусы.. Основана в мае 1937 года"},
        {id: 3, title: "Mazda", body: "Mazda Motor Corporation — японская автомобилестроительная компания, выпускающая автомобили «Мазда».  Основана в январь 1920 года"},
    ]);
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

    const createNewPost = (newPost) => {
        setPost([...post, newPost])
    }

    return (
        <div className={theme ? "grey-btn" : "blue-btn"}>
            <Header changeTheme = {change} theme = {theme} date = {now.toLocaleString()}  />
            <FirstComponent name = {'Dima'}  />
            <Weather />
            <LikeCounter />
            <ModalSection />
            <ComponentFormPost onAddPost={createNewPost}/>
            <PostCar post={post} title={"Список auto"}/>

        </div>
    )
}


  
  

