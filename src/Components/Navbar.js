import React, {useState} from 'react'
import {Link} from  'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import { IconContext } from 'react-icons';
//import './Navbar.css';

export const Navbar = () => {
    const [sidebar, setSidebar] = useState(false);

    const toggleSideBar = () => setSidebar(!sidebar)

    return (
        <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className='navbar'>
        <div className="container flex">
            <li><Link to="/"  className="logo md">Logo</Link></li>
                <nav>
                    <ul>
                      <li><Link to="/order" className="link">Order</Link></li>
                      <li><Link to="/about" className="link">About</Link></li>
                      <li><Link to="/contact" className="link">Contact</Link></li>
                    </ul>
                </nav>
          </div>
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={toggleSideBar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={toggleSideBar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
    )
}
