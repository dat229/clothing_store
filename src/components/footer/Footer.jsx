import React from 'react'

import logo from '../../assets/images/Logo-2.png';

import {Link} from 'react-router-dom';

import './footer.scss';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer--item footer__support'>
            <h3 className='footer__title'>tổng đài hỗ trợ</h3>
            <ul>
                <li><Link to="/">Liên hệ đặt hàng <span>0123456789</span></Link></li>
                <li><Link to="/">Thắc mắc đơn hàng <span>0123456789</span></Link></li>
                <li><Link to="/">Góp ý, khiếu nại <span>0123456789</span></Link></li>
            </ul>    
        </div> 
        <div className='footer--item footer__logo'>
            <h3 className='footer__title'>về logo</h3>
            <ul>
                <li><Link to="/">Giới thiệu</Link></li>
                <li><Link to="/">Liên hệ</Link></li>
                <li><Link to="/">Tuyển dụng</Link></li>
                <li><Link to="/">Tin tức</Link></li>
                <li><Link to="/">Hệ thống cửa hàng</Link></li>
            </ul>    
        </div> 
        <div className='footer--item footer__care'>
            <h3 className='footer__title'>chăm sóc khách hàng</h3>
            <ul>
                <li><Link to="/">Chính sách đổi trả</Link></li>
                <li><Link to="/">Chính sách bảo hành</Link></li>
                <li><Link to="/">Chính sách hoàn tiền</Link></li>
            </ul>    
        </div> 
        <div className='footer--item footer__advertise'>
            <img src={logo} alt="logo footer" />
            <span>
                Hướng đến mục tiêu mang lại niềm vui mua sắm mỗi ngày
                cho hàng triều người tiêu dùng Việt. Hãy cùng Yolo hướng
                đến một cuộc sống năng động và tích cực hơn.
            </span>    
        </div>
    </div>
  )
}

export default Footer