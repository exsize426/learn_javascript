import React, { useEffect } from 'react';
import { useState } from 'react';
import FirstComponent from "../Components/FirstComponent"
import Weather from './Weather';
import LikeCounter from './LikeCounter';
import Header from './Header';
import ModalSection from './ModalSection';
import PostCar from './PostCar';
import ComponentFormPost from './ComponentFormPost';
import MySelect from './Select/MySelect';
import MyInput from './Input/MyInput';



export default function App() {
    const [theme, setTheme] = useState(false);
    const [now, setNow] = useState(new Date()); 
    const [post, setPost] = useState([
        {id: 1, title: "Kia", body: "Kia Corporation — южнокорейская автомобилестроительная компания. Основана в декабре 1944 года"},
        {id: 2, title: "Toyota", body: "Toyota Motor Corporation – самая крупная автомобилестроительная корпорация Японии. Компания производит легковые и грузовые автомобили, а также автобусы.. Основана в мае 1937 года"},
        {id: 3, title: "Mazda", body: "Mazda Motor Corporation — японская автомобилестроительная компания, выпускающая автомобили «Мазда».  Основана в январь 1920 года"},
    ]);
    const [selectSort, setSelectSort] = useState('');
    const [searchQuery, setSearchQuery] = useState("")

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

    const removePost = (currentPost) => {
        setPost(post.filter(p => p.id !== currentPost.id))
    }

    function getSortedPost () {
        if(selectSort) {
            return [...post].sort((a,b) => a[selectSort].localeCompare(b[selectSort])); // сортируем в select(option) посты по алфавиту
        }
        return post;
    }

    const sortedPost = getSortedPost();

    const sortPost = (sort) => {
        setSelectSort(sort)
        
    }

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
            <ComponentFormPost 
                onAddPost={createNewPost}
            />
            <hr style={{margin: "15px"}} />
            <div>
                <MyInput 
                    placeholder="Поиск..."
                    value={searchQuery}
                    onChange={event => setSearchQuery(event.target.value)}
                />
               <MySelect 
                    value={selectSort}
                    onChange={sortPost}
                    defaultValue="Сортировка"
                    options={[
                        {value: "title", name: "По названию"},
                        {value: "body", name: "По описанию"}
                    
                    ]}
               />
            </div>
           {post.length !== 0                         //
                ? 
                <PostCar                              //
                    remove={removePost} 
                    post={sortedPost} 
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


  
  

