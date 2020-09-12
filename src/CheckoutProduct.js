import React from 'react'
import {useStateValue} from './StateProvider.js'

function CheckoutProduct({id,image,title,price,rating,hideButton}) {
    const[{busket},dispatch]=useStateValue();
    const removeFromBasket=()=>{
        dispatch({type:'REMOVE_FROM_BASKET',id})
    }
    
    
    return (
        <div className='checkoutProduct' style={{transformOrigin:'center top'}}>
            <img className='checkoutProduct__image' src={image}/>
            <div className='checkoutProduct__info'>
                <p  className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                <small>$</small>
                <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                 {Array(rating).fill()
                .map((_,i)=>(
                    <p>:star:</p>
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
