import React, { useEffect, useMemo } from 'react';
import { useState } from 'react';
import FirstComponent from "../Components/FirstComponent"
import Weather from './Weather';
import LikeCounter from './LikeCounter';
import Header from './Header';
import ModalSection from './ModalSection';
import PostCar from './PostCar';
import ComponentFormPost from './ComponentFormPost';
import MyButton from "./Button/MyButton"
import PostFilter from './PostFilter';
import MyModal from './MyModalWindow/MyModal';



export default function App() {
    const [theme, setTheme] = useState(false);
    const [now, setNow] = useState(new Date()); 
    const [post, setPost] = useState([
        {id: 1, title: "Kia", body: "Kia Corporation — южнокорейская автомобилестроительная компания. Основана в декабре 1944 года"},
        {id: 2, title: "Toyota", body: "Toyota Motor Corporation – самая крупная автомобилестроительная корпорация Японии. Компания производит легковые и грузовые автомобили, а также автобусы.. Основана в мае 1937 года"},
        {id: 3, title: "Mazda", body: "Mazda Motor Corporation — японская автомобилестроительная компания, выпускающая автомобили «Мазда».  Основана в январь 1920 года"},
    ]);
    const [filter, setFilter] = useState({sort: "", query: ""});
    const [modal, setModal] = useState(false) // управляет открытием/закрытием модального окна
    

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

    const createNewPost = (newPost) => {     //  создает новый пост
        setPost([...post, newPost])
        setModal(false) // меняет состояние(закрывает модалку) при создание поста
    }

    const removePost = (currentPost) => {
        setPost(post.filter(p => p.id !== currentPost.id))
    }

    

    const sortedPost = useMemo(() => {
        console.log("F-ya otrabotala")
        if(filter.sort) {
            return [...post].sort((a,b) => a[filter.sort].localeCompare(b[filter.sort])); // сортируем в select(option) посты по алфавиту
        }
        return post;
    },[filter.sort, post]);

    const sortedAndSeachPost = useMemo(() => {
       return sortedPost.filter(post => post.title.toLowerCase().includes(filter.query))
    },[filter.query,sortedPost])


   

    return (
        <div className={theme ? "grey-btn" : "blue-btn"}>
            <Header 
                changeTheme = {change}
                theme = {theme}
                date = {now.toLocaleString()}  
            />
            <FirstComponent 
                name = {'Dima'}  
            />
            <Weather />
            <LikeCounter />
            <ModalSection />
            <MyButton style={{marginTop: "10px"}} onClick={() => setModal(true)}>
                Создать новую марку авто
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <ComponentFormPost 
                onAddPost={createNewPost}
                />
            </MyModal>
            
            <hr style={{margin: "15px"}} />
            <div>
                <PostFilter 
                    filter={filter}
                    setFilter={setFilter}
                />
            </div>
           {sortedAndSeachPost.length !== 0                         //
                ? 
                <PostCar                              //
                    remove={removePost} 
                    post={sortedAndSeachPost} 
                    title={"Список auto"}             //     условная отрисовка, если постов нет то выводим надпись, иначе отображаем посты
                />
                :
                <h1 style={{textAlign: "center"}}>    
                    Посты не найдены
                </h1>                                 //
           }
          
           

        </div>
    )
}


  
  

