import React from 'react'
import {Link,useHistory} from 'react-router-dom'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import {useStateValue} from "./StateProvider"
import {auth} from "./firebase"

function Header() {
    const history=useHistory()
    const [{basket,user},dispatch]=useStateValue();
    const handleAuthentication=()=>{
           if(user){
               auth.signOut();
               history.push('/');
           }
    }
    
    return (

        <div className='header'>
            <Link to="/">
            <img className="header_logo" 
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            />
            </Link>
            
            <div className="header_search">
           <input className="header_searchInput"
            type="text"/>
            <SearchIcon 
            className="header_searchIcon"/>
            </div>
            <div className="header_nev">
                    <Link style={{textDecoration:'none'}} to={!user && '/login'}>
                    <div onClick={handleAuthentication} className='header_option'>
                            <span 
                            className='header_optionLineOne'>
                            Hello {user?user.email:'Guest'}
                            </span>
                            <span 
                            className='header_optionLineTwo'>
                            {user?'Sign Out':'Sign In'}
                            </span>
                    </div>
                    </Link>
                    
                    <div className='header_option'>
                        <span 
                        className='header_optionLineOne'>
                        Returns
                        </span>
                        <span 
                        className='header_optionLineTwo'>
                        & Oders
                        </span>
                    </div>
                    <div className='header_option'>
                            <span 
                            className='header_optionLineOne'>
                        Your
                            </span>
                            <span 
                            className='header_optionLineTwo'>
                        Prime
                            </span>
                    </div>
                    <Link style={{textDecoration:'none'}}  to="/checkout">
                        <div className="header_optionBasket">
                            <ShoppingBasketIcon/>
                            <span className="header_optionLineTwo header_basketCount">{basket?.length}</span>
                        </div>
                    </Link>
                    

            </div>
            
        </div>
    )
}

export default Header
