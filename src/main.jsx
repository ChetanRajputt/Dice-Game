import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Welcome from './pages/Welcome.jsx'

const router =createBrowserRouter(
  createRoutesFromElements(
    <>
    <Route path="/" element={<Welcome />} />
    <Route path="/home" element={<Home />} />
    </>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
