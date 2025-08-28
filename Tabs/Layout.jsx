import {Link, Outlet} from "react-router-dom"
import React from 'react'

import classes from "../Components/App.module.css"

export default function Layout() {
  return (
    <>
        <header className={classes.app}>
            <Link to="/">Home Page </Link>
            <Link to="posts">Sandbox</Link>
            <Link to="about">About</Link> 
        </header>
        <Outlet />  
    </>
        // Outlet позволяет вставлять на страницу дочерние элементы Route
  )
}
