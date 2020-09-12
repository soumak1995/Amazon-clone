import React,{useEffect} from 'react'
import './Subtotal.css'
import CurrencyFormat from "react-currency-format"
import {useStateValue} from './StateProvider.js'
import {getBasketTotal} from './Reducer.js'
import {useHistory} from 'react-router-dom'
function Subtotal() {
  const history=useHistory();
  const [{basket},dispatch]=useStateValue();
    
    return (
        <div 
          className="subtotal">
          <CurrencyFormat
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
        renderText={(value) => (
          <>
            <p>
              Subtotal ({basket?.length} item(s)): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
      />
            <button onClick={e=>history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal
