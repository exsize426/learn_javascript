import React, { useState } from "react"
import MyButton from "../Components/Button/MyButton"
import MyInput from "./Input/MyInput"

export default function ComponentFormPost ({onAddPost}) {
    const [post, setPost] = useState({title: '', body: ""})
    const addNewPost = (e) => {
        e.preventDefault();
        const newPost =  {
           ...post,
           id: Date.now(),
            
        }
        onAddPost(newPost) // прокидываем новый пост в массив другого компонента
        setPost({title: '', body: ""})
    }

    return (
        <form>
        <MyInput 
            value={post.title}
            type="text" 
            onChange={e => setPost({...post, title: e.target.value})} 
            placeholder="Марка авто"/>
        <MyInput 
            value={post.body}
            onChange={e => setPost({...post, body: e.target.value})}
            type="text" 
            placeholder="Описание авто"/>
        
        <MyButton onClick={addNewPost} >Создать пост</MyButton>
        </form>
    )
}