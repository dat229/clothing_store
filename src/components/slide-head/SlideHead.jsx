import React, { useRef, useState } from 'react'

import HeroSliderData from '../../assets/fake-data/hero-slider';

import { Link } from 'react-router-dom';

import './slideHead.scss';
import Button from '../button/Button';

const SlideHead = () => {

    const slideMain =  useRef(null);
    const [nextSlide,setNextSlide] = useState(1);

    const nextSlideHead = () => {
        setNextSlide(nextSlide+1);
    }

    const backSliceHead = () => {
        setNextSlide(nextSlide-1);
    }

  return (
    <div ref={slideMain} className='slide-head'>
        {
            HeroSliderData.map((item,i)=>(
                <HeroSlide 
                    key={i} 
                    item={item} 
                    className = {nextSlide===i+1 ? 'active' : ""}
                />
            ))
        }
        <div className='slide-head__next'>
            <i className={`bx bxs-chevron-left ${nextSlide===1 ? 'active' : ''}`}
                onClick={nextSlide > 1 ? backSliceHead : null}
            ></i>
            <span>{nextSlide}</span>/<span>{HeroSliderData.length}</span>
            <i className={`bx bxs-chevron-right ${nextSlide===HeroSliderData.length ? 'active' : ''} `}
                onClick={nextSlide === HeroSliderData.length ? null : nextSlideHead }
            ></i>
        </div>
    </div>
  )
}

export default SlideHead

const HeroSlide = (props) => (
    <div className={`slide-head__item mb-2 ${props.className}`}>
        <div className='slide-head__item__content'>
            <h2>{props.item.title}</h2>
            <span>{props.item.description}</span>
            <Button 
                title="xem chi tiết"
                icon = "bx bx-cart"
                path={props.item.path}
                buttonTall = {true}
            />
        </div>
        <div className='slide-head__item__img'>
            <img src={props.item.img} alt="" />
            <div className={props.item.color}></div>
        </div>
  </div>
)