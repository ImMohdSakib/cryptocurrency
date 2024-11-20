import React from 'react'
import './styles/Header.css'
import { Link } from 'react-router-dom'
const Heading = () => {
  return (
    <nav>
        <Link to="./">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
    </nav>
  )
}

export default Heading