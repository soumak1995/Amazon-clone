import React,{useEffect} from 'react'
import {useStateValue} from './StateProvider.js'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
toast.configure();
function CheckoutProduct({id,image,title,price,rating,hideButton}) {
    const[{busket,user},dispatch]=useStateValue();
    const notify=()=>{
        toast.warning('Oh!! no 🙁🙄 you removed from basket')
    }

    const removeFromBasket=()=>{
        dispatch({type:'REMOVE_FROM_BASKET',id})
        notify()
    }
   
    
    return (
        <div className='checkoutProduct' style={{transformOrigin:'center top'}}>
            <img className='checkoutProduct__image' src={image}/>
            <div className='checkoutProduct__info'>
                <p  className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                <small>₹</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                 {Array(rating).fill()
                .map((_,i)=>(
                    <p>⭐</p>
                )
                )  
                }
               
            </div>
           {!hideButton && <button className="checkoutProduct__buttonResize" onClick={removeFromBasket}>Remove from Basket</button>} 
        </div>
        </div>
    )
}

export default CheckoutProduct
