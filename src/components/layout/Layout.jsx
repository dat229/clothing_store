import React from 'react'
import Navbar from '../navbar/Navbar';
import Routers from '../../Routers';

import './layout.scss';
import Footer from '../footer/Footer';

const Layout = () => {
  return (
    <div className='layout container'>
        <Navbar />
        <div className='page'>
          <Routers />
        </div>
        <Footer />
    </div>
  )
}

export default Layout