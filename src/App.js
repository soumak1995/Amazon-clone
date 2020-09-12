import React, {useState,useEffect,useReducer}from 'react';
import './App.css';
import Header from './Header.js'
import Home from './Home.js'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import Checkout from './Checkout.js'
import Login from './Login.js'
import {auth} from './firebase.js'
import {useStateValue} from "./StateProvider.js"
import Payment from './Payment'
import {loadStripe} from "@stripe/stripe-js"
import {Elements} from "@stripe/react-stripe-js"
import Orders from './Orders'

const App=()=>{
  const promise=loadStripe('pk_test_51HQ8kBLuWZAF59GDmQqURmvCwP655il2R60Sc3YPR4qG2DmVWOZjSfCR2MFXls2lGc4xhoJUYkZIGGYviHcHUr1000I1plgW0d')
  const [{},dispatch] = useStateValue();
useEffect(()=>{
  auth.onAuthStateChanged(authUser=>{
    console.log('this user is >>>'+authUser)
    if(authUser){
        dispatch({
          type:'SET_USER',
          user:authUser
        })
    }else{
      dispatch({
        type:'SET_USER',
        user:null
      })
    }
  })
},[])
  return (
    <Router>
    <div>
    <Switch>
      <Route path={'/login'}>
          <Login/>
       </Route>
       <Route path={'/'} exact={true}>
           <Header/>
           <Home/>
      </Route>
        <Route path={'/checkout'}>
        <Header/>
        <Checkout/>
        </Route>
      <Route path={'/payment'}>
         <Header/>
         <Elements stripe={promise}>
           <Payment/>
         </Elements>
         
       </Route>
       <Route path={'/orders'}>
         <Header/>
         <Orders/>
         
       </Route>
    </Switch>
    
    
    </div>
    </Router>
  )
}


export default App;
