import React, { useEffect, useRef, useState } from 'react'

import {Link, useLocation} from 'react-router-dom'

import Logo from '../../assets/images/Logo-2.png';
import Login from '../login/Login';

import './navbar.scss';

const linkPages = [
  {
    type: "Trang chủ",
    path: "/",
  },
  {
    type: "Sản phẩm",
    path: "/product",
  },
  {
    type: "Phụ kiện",
    path: "accessory"
  },
  {
    type: "Liên hệ",
    path: "/contact",
  },
]

const dropDowns = [
  {
    class:'bx bx-search',
    path: '/',
  },
  {
    class: "bx bx-cart",
    path: '/cart',
  },
]

const Navbar = () => {

  const location = useLocation();

  const headerRef = useRef(null);
  const navbarLink = useRef(null);
  const showLogin = useRef(null);
  const showLogout = useRef(null);

  const [listLink,setListLink] = useState(false);


  useEffect(()=>{
    const scollNavbar = () => {
      if(document.body.scrollTop > 80 || document.documentElement.scrollTop >80){
        headerRef.current.classList.add('shrink');
      }else{
        headerRef.current.classList.remove('shrink');
      }
    }

    document.addEventListener('scroll',scollNavbar);

    return ()=>{
      document.removeEventListener('scroll',scollNavbar);
    }
  },[])

  const upLinkNavbar = (item) => {
    setListLink(item);
  }

  const onShowLogin = ()=>{
    showLogin.current.classList.add('active');
  }

  const noShowLogin = ()=>{
    showLogin.current.classList.remove('active');
  }

  const onShowLogout = ()=>{
    showLogout.current.classList.add('active');
  }

  const noShowLogout = ()=>{
    showLogout.current.classList.remove('active');
  }

  return (
    <div ref={headerRef} className='navbar'>
      
      <div className='navbar__wrap container'>
        <div 
          className='navbar__icon'
          onClick={() => upLinkNavbar(true)}
        >
          <i className='bx bx-list-ul'></i>  
        </div>
        <div ref={navbarLink} className={ `navbar__link ${listLink ? 'active' : ''}`}>
          <div className='navbar__link__close' 
              onClick={() => upLinkNavbar(false)}
          >
            <i className='bx bx-x'></i>  
          </div>
          {
            linkPages.map((item,i)=>(
              <Link key={i} to={item.path}
                  className={`navbar__link__item ${location.pathname === item.path ? 'active' : ""}`}
                  onClick={() => upLinkNavbar(false)}
              >
                {item.type}
              </Link>
            ))
          }
        </div>
        <Link to="/" className='navbar__logo'>
          <img src={Logo} alt="logo navbar" />
        </Link>
        <div className='navbar__dropdown'>
          {
            dropDowns.map((item,i)=>(
              <Link to={item.path} key={i}>
                <i className={item.class}></i>
              </Link>
            ))
          }
          <div className='navbar__dropdown--login'>
            <div className='navbar__dropdown--login__noshow'>
              <span onClick={onShowLogin}>Đăng nhập</span>
              <span>Đăng ký</span>
            </div>
            <div ref={showLogin} className='navbar__dropdown--login__show'>
              <div className='login'>
                <div className='login__form'>
                  <div className='login__form--close'
                    onClick={noShowLogin}
                  >
                    <i className='bx bx-x'></i>
                  </div>
                  <Login />
                </div>
              </div>
            </div>
            <div ref={showLogout} className='navbar__dropdown--login__show'>
              <div className='login'>
                <div className='login__form'>
                  <div className='login__form--close'
                    onClick={noShowLogin}
                  >
                    <i className='bx bx-x'></i>
                  </div>
                  <Login />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar