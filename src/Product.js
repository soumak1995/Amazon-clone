import React from 'react'
import './Product.css'
import {useStateValue} from './StateProvider'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
toast.configure();
const Product=({id,title,image,price,rating})=>{

    const [{basket},dispatch]=useStateValue();
    

    
    const notify=()=>{
       toast.info('You added this product in your basket!🤩');
    }
    const addToBasket=()=>{
  
            dispatch({
                type:'ADD_TO_BASKET',
                item:{
                    id:id,
                    title:title,
                    image:image,
                    price:price,
                    rating:rating,
                    count:1
                },
            });
        
      
      notify()
    }
    return(   
        <div
        className="product">
         <div className="product__info">
         <p className="product__title">{title}</p>
         <p className="product__price">
         <small>₹</small>
         <strong>{price}</strong>
         </p>
         <div className="product__rating">
         {Array(rating).fill().map((_,i)=>(
            <p>⭐</p>
         ))}
         
         </div>
          
         </div>
        <img src={image} alt="productImage" />
        
        <button className="product__buttonResize" onClick={addToBasket}>Add to Basket</button>
        </div>
    )
}
export default Product