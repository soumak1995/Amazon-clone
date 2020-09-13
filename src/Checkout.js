import React,{useEffect,useState} from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import {useStateValue} from './StateProvider.js'
import CheckoutProduct from './CheckoutProduct.js'
import './CheckoutProduct.css'
import {toast} from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'
toast.configure();
function Checkout() {
    const[loginStatus,setLoginStatus]=useState(true)
    const notify=()=>{
        toast.warn('Please log in before procced to checkout!!',{
            position:toast.POSITION.TOP_CENTER,
            autoClose:false
        });
        
    }
    const[{basket,user},dispatch]=useStateValue();
    useEffect(()=>{
        if(user===null){
            notify()
        }else{
            setLoginStatus(false);
        }
   },[user])
    return (
        <div className='checkout'>
            <div className="checkout__left">
            <img 
            className='checkout__ad'
            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
            alt=""
            />
            <div>
              <h4 className='checkout_greet'> Hello {user?.email}</h4>
               <h2 className="checkout_title">
              {basket.length <=0? 'Your Shopping Basket is empty':'Your Shopping Basket'}
               </h2>
                   {basket.map(items=>(
                    <CheckoutProduct
                    id={items.id}
                    title={items.title}
                    image={items.image}
                    price={items.price}
                    rating={items.rating}
                    />
                   )
                        
                   )}
            
            </div>
            </div>
            <div className="checkout__right">
              <Subtotal loginStatus={loginStatus}/>
            </div>

        </div>
    )
}

export default Checkout
