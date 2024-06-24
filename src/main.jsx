import React from 'react'
import ReactDOM from 'react-dom/client'
import Navbar from './components/navbar'
import './index.css'
import Home from './components/home'
import Project from './components/project'
import About from './components/about'
import Contact from './components/contact'
import Stack from './components/stack'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path : '/',
    element: <Navbar />,
    children: [
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/about',
      element: <About />
    },
    {
      path: '/projects',
      element: <Project />
    },
    {
      path: '/stack',
      element: <Stack />
    },
    {
      path: '/contact',
      element: <Contact />
    
    }]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
