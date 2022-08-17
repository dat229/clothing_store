import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux';

import { useParams } from 'react-router-dom';

import productData from '../../assets/fake-data/products';

import { addCart } from '../../redux/cartSlice';

import './detailItem.scss';

const DetailItem = (props) => {
    const params = useParams();

    const dispath = useDispatch();

    const product = props.product ? props.product :
                    productData.getProductBySlug(params.slug);

    const [img,setImg] = useState(product.image01);
    const [colorItem,setColorItem] = useState(null);
    const [sizeItem,setSizeItem] = useState(null);
    const [amountItem,setAmountItem] = useState(1);

    const [heightDescription,setHeightDecription] = useState(false);

    const decriptionItem = useRef(null);
    const imageMain = useRef(null);

    const changeImg = (img) => {
        setImg(img);
        imageMain.current.setAttribute('src',img);
    }

    const onClickAmount = (type) => {
        if(type==="+" ){
            setAmountItem(amountItem+1);
        }
        if(type==="-" && amountItem>1){
            setAmountItem(amountItem-1);
        }
    }


    useEffect(()=>{
        setImg(product.image01);
        setColorItem(null);
        setSizeItem(null);
        setAmountItem(1);
        decriptionItem.current.innerHTML=product.description;
        
    },[params.slug])

    const addCartItem = () => {
        if(colorItem  ){ //colorItem && sizeItem
            dispath(addCart({
                product: product,
                color: colorItem,
                size: sizeItem,
                amount: amountItem,
            }));

            alert("successfu");
        }
        else{
            // if(colorItem===null && sizeItem===null){
            //     alert("Vui lòng chọn màu và size sản phẩm")
            // }
            if(colorItem===null){
                alert("Vui lòng chọn màu sản phẩm")
            }
            // else{
            //     alert("Vui lòng chọn size sản phẩm")
            // }
        }
    }

  return (
    <div className='detail-item'>
        <div className='detail-item__image'>
            <div className='detail-item__image__img'>
                <div className='detail-item__image__img--img01'
                    onClick={()=> changeImg(product.image01)}
                >
                    <img src={product.image01} alt="" 
                        className={img===product.image01 ? 'active' : ''} 
                    /> 
                </div> 
                <div className='detail-item__image__img--img02'
                    onClick={()=> changeImg(product.image02)}
                >
                    <img src={product.image02} alt="" 
                        className={img===product.image02 ? 'active' : ''} 
                    />  
                </div>
            </div>
            <div className='detail-item__image__main'>
                <img ref={imageMain} src={product.image01} alt="" />   
            </div>
        </div>
        <div className='detail-item__property'>
            <h3>{product.title}</h3>
            <span>{product.price}</span>
            <ul className='detail-item__property__color'>
                <h5>Màu sắc</h5>
                {
                    product.colors.map((color,i) =>(
                        <li key={i} className={`color color--${color} ${color===colorItem ? 'active' : ''}`}
                            onClick={()=>setColorItem(color)}
                        ></li>
                    ))
                }  
            </ul>
            {/* <ul className='detail-item__property__size'>
                <h5>Kích cỡ</h5>
                {
                    product.size.map((size,i) =>(
                        <li key={i}
                            className={size===sizeItem ? 'active' : ''}
                            onClick={()=> setSizeItem(size)}
                        >
                            <span>{size}</span>
                        </li>
                    ))
                }  
            </ul> */}
            <div className='detail-item__property__amount'>
                <h5>số lượng</h5>
                <div className='detail-item__property__amount__count'>
                    <span onClick={()=>onClickAmount("+")}>+</span>
                    <input type="text" value={amountItem} 
                            onChange={(e)=>setAmountItem(Number(e.target.value))}
                    />
                    <span onClick={()=>onClickAmount("-")}>-</span>
                </div>
            </div>
            <div className='detail-item__property__buy'>
                <button className='detail-item__property__buy__cart'
                        onClick={addCartItem}
                >
                    Thêm vào giỏ hàng
                </button>
                <button className='detail-item__property__buy__now'>Mua ngay</button>
            </div>
        </div>
        <div className={`detail-item__description ${heightDescription ? 'active' : ''}`}>
            <div className='detail-item__description__content'>
                <h3>Chi tiết sản phẩm</h3>
                <div ref={decriptionItem}>{product.description}</div>
            </div>
            <button onClick={()=> setHeightDecription(!heightDescription)}>{ heightDescription ? "Thu gọn" : "Xem thêm" }</button>
        </div>
    </div>
  )
}

export default React.memo(DetailItem);