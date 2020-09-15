import React,{useEffect,useState} from 'react'
import './Checkout.css'
import Subtotal from './Subtotal.js'
import {useStateValue} from './StateProvider.js'
import CheckoutProduct from './CheckoutProduct.js'
import './CheckoutProduct.css'
import {toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FlipMove from 'react-flip-move';


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
   console.log(basket)
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
              
               <FlipMove appearAnimation="fade" enterAnimation="fade" leaveAnimation="fade">
                                {/* List all the checkout products */}
                                {basket?.map((item, index) => (
                                    <div key={index}>
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            rating={item.rating}
                                            image={item.image}
                                        />
                                    </div>

                                ))}
                            </FlipMove>
            
                   
            
            </div>
            </div>
            <div className="checkout__right">
              <Subtotal loginStatus={loginStatus}/>
            </div>

        </div>
    )
}

export default Checkout
