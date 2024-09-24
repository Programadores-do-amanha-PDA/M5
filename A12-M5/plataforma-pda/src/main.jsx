import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import { Header } from './components/header'
import Login from './pages/login'
import { RouterProvider } from 'react-router-dom'
import router from './router/router'

createRoot(document.getElementById('root')).render(
  <>
   <Header/>
   <RouterProvider router={router}/>
  </>
);

