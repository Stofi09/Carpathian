import React, {useState} from 'react'
import {Link} from  'react-router-dom';

export const Navbar = () => {
    return (
        <header className="mobileNav">
        <div className="navbar">
            <div className="container flex">
            <li><Link to="/"  className="logo md">Shipper</Link></li>
                <nav>
                    <ul>
                    <li><Link to="/order" className="link">Order</Link></li>
                    <li><Link to="/contact" className="link">Contact</Link></li>
                    <li><Link to="/about" className="link">About</Link></li>
                    </ul>
                </nav>
              
            </div>
        </div>
    </header>
    )
}
