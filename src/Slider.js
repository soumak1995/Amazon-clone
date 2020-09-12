import React,{useState} from 'react'
import Carousel from 'react-items-carousel';
import './Home.css'
function Slider() {
      const Items=[{
              id:1,
              url:'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
      },
      {
           id:2,
           url:'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Audio/Edict/r02/1/Edict_GW_1500x600._CB406612940_.png'

      },
        {
              id:3,
              url:'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'

        }
]
    const [items,setItems]=useState(Items);
    return (
        <Carousel className="home__image">
            {items.map((m)=><img  key={m.id} src={m.url}/>)}
        </Carousel>
    )
}

export default Slider
