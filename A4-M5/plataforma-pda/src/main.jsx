import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './pages/home'
import { Header } from './components/header'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header/>
    <Home/>
  </StrictMode>
)
