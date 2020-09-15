import React,{useEffect} from 'react'
import './Home.css'
import Product from './Product.js'
import Slider from "react-slick";
const Home=()=>{
  useEffect(() => (
    slider(0)
), [])
    return(
        <div className="home">
          <div className="home__container">

          <div className="home__slider-container">
                    <div className="home__slide">
                        <img
                            className="home__image "
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Post_AugArt/GW_Echo_PC_2x_V2._CB405879256_.jpg"
                            alt="image1" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/8thSept_GW/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_DesktopTallHero_2_1500x600._CB405103024_.jpg"
                            alt="image2" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
                            alt="image3" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/SingleTitle/TheBoyss2/3000x1200_Hero-Tall_p._CB404993994_.jpg"
                            alt="image4" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Wireless/SamsungM/M51/GWTO/Pre_Launch/P38983965_IN_WLME_SamsungGalaxy_M51_New_Launch_M51_tallhero_1500x600_1._CB405468917_.jpg"
                            alt="image5" />
                    </div>
                    <div className="home__slide">
                        <img
                            className="home__image"
                            src="https://images-eu.ssl-images-amazon.com/images/G/31/img19/AmazonPay/Rajeshwari/September/GWBanners/Control/DesktopHero_1500x600._CB405007888_.jpg"
                            alt="image6" />
                    </div>
                </div>
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
function slider(counter) {
  const slides = document.querySelectorAll(".home__image");

  slides.forEach((slide, index) => {
      if (index !== counter) {
          slide.style.visibility = `hidden`
          slide.classList.add(`image-${index}`)
      }
  })
  moveCorousal(counter, slides, slides.length)
}
function moveCorousal(counter, slides, len) {

  if (slides) {

      if (counter >= len - 1)
          counter = 0
      else
          counter += 1

      slides.forEach((slide, index) => {
          if (index === counter) {
              slide.style.visibility = `visible`
          }
          else {
              slide.style.visibility = `hidden`
          }
      })

  }
  setTimeout(() => {
      moveCorousal(counter, slides, len);
  }, 5000)
}
export default Home;

