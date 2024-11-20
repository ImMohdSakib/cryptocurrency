import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './components/Home'
import Contact from './components/Contact.jsx'
import About from './components/About.jsx'
import Header from './components/Header.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Product from './components/Product.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Router>

       <Header/>
       <Routes>
       <Route path='/' element = {<Home/>} />
       <Route path='/about' element = {<About/>} />
       <Route path='/contact' element = {<Contact/>} />
       <Route path='/product/:id' element = {<Product/>} />
       <Route path='*' element = {<div><h1>Page not found 404</h1></div>}/>
       </Routes>

       </Router>
  </React.StrictMode>,
)
