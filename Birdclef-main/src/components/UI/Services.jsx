

import React from 'react'
import '../../style/services.css'

const serviceData=[
    {
        icon:'ri-voice-recognition-line',
        title:'Efficient Bird Recognition',
        desc:'Quickly and accurately identify different bird species with BirdClef streamlined recognition system, available through its user-friendly app.'
    },
    {
        icon:'ri-hourglass-fill',
        title:'Saves Valuable Time',
        desc:' BirdClef advanced algorithms and extensive database eliminate the need for manual bird identification, allowing users to save significant amounts of time.'
    },
    {
        icon:'ri-collage-fill',
        title:'Sleek and User-Friendly Interface',
        desc:'Enjoy a seamless experience in birdwatching with BirdClef intuitively designed app interface, catering to users of all levels of expertise.'
    },
    {
        icon:'ri-sun-foggy-line',
        title:'Enhances Birdwatching Experience',
        desc:'BirdClef enhances birdwatching for all, providing instant access to detailed bird information, perfect for beginners and seasoned birders alike.'
    },

    
]


const Services = () => {
  return <section id='Service'>
        <div className= "container">
            <div className='service__top-content'>
                <h6 className='subtitle'>Our Services</h6>
                <h2>Streamline bird recognition with our sleek and efficient app, </h2>
                <h2 className='highlight'> BirdClef, saving you valuable time.</h2>
            </div>

            <div className='service__item-wrapper'>
                {
                    serviceData.map((item,index)=>(
                    <div className='service__item' key={index}>
                    <span className='service__icon'>
                        <i class={item.icon}>
                        </i>
                        </span>
                        <h3 className='service__title'>{item.title}</h3>
                        <p className='description'>"{item.desc}</p>
                </div>
                    ) )
                }
            </div>
        </div>
    </section>  
}

export default Services;
