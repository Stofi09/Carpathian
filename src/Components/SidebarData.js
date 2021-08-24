import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome  color="gold"/>,
    cName: 'nav-text',
   
  },
  {
    title: 'Order',
    path: '/order',
    icon: <FaIcons.FaCartPlus  color="gold"/>,
    cName: 'nav-text'
  },
  {
    title: 'About',
    path: '/about',
    icon: <IoIcons.IoIosPaper  color="gold"/>,
    cName: 'nav-text'
  },
  {
    title: 'Contact',
    path: '/contact',
    icon: <FaIcons.FaEnvelopeOpenText  color="gold"/>,
    cName: 'nav-text'
  },
];