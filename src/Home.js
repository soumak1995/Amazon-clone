import React from 'react'
import './Home.css'
import Product from './Product.js'
import Slider from "react-slick";
const Home=()=>{
    return(
        <div className="home">
          <div className="home__container">
            <img  className="home__image" src='https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' alt=""/>
              <div className="home__row">
              <Product id={54656} title={'Microsoft Surface Pro 7 VDV-00015 12.3 inch Touchscreen 2-in-1 Laptop (10th Gen Intel Core i5/8GB/128GB SSD/Windows 10 Home/Intel Iris Plus Graphics), Platinum'} price={19.9} 
              image={'https://images-na.ssl-images-amazon.com/images/I/519JUh2%2BewL._SX679_.jpg'}
              rating={5}/>
              <Product id={54655} title={'HUAWEI Y9s (Breathing Crystal, 6GB RAM, 128GB Storage, Ultra FullView Display, 48MP AI Triple Camera, Side-Mounted Fingerprint, 4000mAH Powerfull Battery, Kirin 710F, Android Based EMUI 9.1)'} price={90.99} 
              image={'https://images-na.ssl-images-amazon.com/images/I/61yERfK2vHL._SX679_.jpg'}
              rating={3}/>
              </div>
              <div className="home__row">
              <Product id={54654} title={'Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Grey)'} price={90.99} 
              image={'https://images-na.ssl-images-amazon.com/images/I/618l86R3U9L._SX522_.jpg'}
              rating={4}/>
              <Product id={54653} title={'Echo Dot (3rd Gen) – New and improved smart speaker with Alexa (Black)'} price={90.99} 
              image={'https://images-na.ssl-images-amazon.com/images/I/61%2BQNG8IiPL._SL1000_.jpg'}
              rating={2}/>
             <Product id={54652} title={'Introducing Echo Show 8 – Smart display with Alexa - 8" HD screen with stereo sound – Black'} price={90.99} 
              image={'https://images-na.ssl-images-amazon.com/images/I/51UZ17lvVFL._SX679_.jpg'}
              rating={4}/>
              </div>
              <div className="home__row">
              <Product id={5465} title={'Samsung 80 cm (32 inches) Wondertainment Series HD Ready LED Smart TV UA32TE40AAKXXL (Titan Gray) (2020 model)'} price={90.99} 
              image={'https://m.media-amazon.com/images/S/aplus-media/vc/0e728cb8-7f8c-44e4-a9f6-aca0cbfd7fb0.__CR0,0,1464,600_PT0_SX1464_V1___.jpg'}
              rating={5}/>
              
              </div>
           </div>
        </div>
    )
}
export default Home;

