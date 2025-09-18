import {  Outlet } from "react-router-dom"
import React from 'react'

import classes from "../Components/App.module.css"
import  {CustomLink}  from "../Tabs/CustomLink.jsx"


export default function Layout() {
  return (
    <>
        <header className={classes.app}>
            <CustomLink to="/"> Home Page </CustomLink>
            <CustomLink to="posts"> Sandbox</CustomLink>
            <CustomLink to="about"> About</CustomLink> 
        </header>
        <Outlet />  
    </>
        // Outlet позволяет вставлять на страницу дочерние элементы Route, 
        // получается после header, Если после Outlet будет footer, значит Link вставятся между тегами header и footer
  )
}
