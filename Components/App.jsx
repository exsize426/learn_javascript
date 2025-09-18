import {Routes, Route, Link} from 'react-router'
import React from 'react'

import Blog from './Blog'
import About from '../Tabs/About'
import NotFoundPage from '../Tabs/NotFoundPage'
import HomePage from '../Tabs/HomePage'
import Layout from '../Tabs/Layout'


export default function App() {
  return (
    <>
        <Routes> 
            <Route path='/' element={<Layout />}>
              <Route index element={<HomePage />}></Route> 
              <Route path="posts" element={<Blog />}></Route>
              <Route path="about" element={<About />}></Route>
              <Route path="*" element={<NotFoundPage />}></Route>
            </Route>
            
        </Routes>
       
    </>
  )           // index говорит о том,что HomePage будет привязан к Route path='/'
}
