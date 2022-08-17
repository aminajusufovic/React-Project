import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <nav className="nav">
        <Link id="navLink" to="/"><p id="navName">Home</p></Link>
        <Link id="navLink" to="/about"><p id="navName">About</p></Link>
        <Link id="navLink" to="/products"><p id="navName">Products</p></Link>
    </nav>
  )
}

export default Nav