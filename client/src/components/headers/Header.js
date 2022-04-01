import React, {useState, useContext} from 'react'
import {GlobalState} from '../../GlobalState'
import Menu from './icon/menu.svg'
import Close from './icon/close.svg'
import Cart from './icon/cart.svg'
import {Link} from 'react-router-dom'

function Header() {
  const value = useContext(GlobalState)  
  return (
   <header>
       <div className="menu">
           <img src={Menu} alt="" width="30" />
       </div>

       <div className="logo">
           <h1>
               <Link to="/">Let's Bid</Link>
           </h1>
       </div>

       <ul>
           <li><Link to="/">Properties</Link></li>
           <li><Link to="/login">Login ✥ Register</Link></li>

           <li>
               <img src={Close} alt="" width="30" className="menu" />
           </li>
       </ul>

       <div className="cart-icon">
         <span>0</span>  
        <Link to="/cart">
            <img src={Cart} alt="" width="30" />
        </Link>
        </div>
   </header>
  )
}

export default Header