import React from 'react';

import policy from '../../assets/fake-data/policy';

import './policyHead.scss';

const PolicyHead = () => {
  return (
    <div className='policy-head'>
        {
            policy.map((item,i)=>(
                <ItemPolicy 
                    key={i}
                    item = {item}
                />
            ))
        }    
    </div>
  )
}

const ItemPolicy = (props) =>{
    return(
        <div className='policy-head__item'>
            <div className='policy-head__item__content'>
            <i className={props.item.icon}></i>
            <div className='policy-head__item__content--title'>
                <h6>{props.item.name}</h6>
                <span>{props.item.description}</span>    
            </div>  </div>
        </div>
    )
}

export default PolicyHead