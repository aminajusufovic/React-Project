import React from 'react'
import { Link } from 'react-router-dom'
import {FaShoppingCart} from "react-icons/fa"
import{HiUserAdd} from "react-icons/hi"


function Nav() {
  return (
    <nav className="nav">
        
        <div className='n1'><a href=""><img src="./logo.jpg" alt="" /></a></div>
        <div className='n2'>
          <Link className='navLink' to="/"><p id="navName">Home</p></Link>
        <Link className='navLink' to="/about"><p id="navName">About</p></Link>
        <Link className='navLink navLink3' to="/products"><p id="navName">Products</p></Link></div>
        <div className='n3'>
          <div className='cart'><Link className='n3-link' to="/Korpa"> Cart<FaShoppingCart className='icon'/></Link></div>
          <div className='login'><Link className='n3-link' to="/"> Login<HiUserAdd className='icon'/></Link></div>
        </div>
    </nav>
  )
}

export default Nav