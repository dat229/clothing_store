import React, {useState } from 'react'

import ShowProduct from '../show-product/ShowProduct';

import './button.scss';

const Button = (props) => {

  const [toggle,setToggle] = useState(props.active); 

  const show = () => {
    if(props.onclick){
      props.onclick();
    }
    setToggle(true);
  }

  return (
    <>
    <div className={`button__link
                ${props.className ? 'small' :''}
                ${props.buttonTall ? 'active' : ''}
        `}
        onClick={show}
    >
        {
            props.title ? <div className='button__link__title'>{props.title}</div> : ""
        }    

        {
            props.icon ? <i className={props.icon}></i> : ""
        }
    </div>
    <div className={`button__show ${toggle ? 'active' : ''}`}>
      <div className='button__show--toggle'>
        <ShowProduct/>
        <button onClick={()=> setToggle(false) } 
              className={toggle ? 'active' : ''}
        >Đóng</button>
      </div>
    </div>
    </>
  )
}

export default Button