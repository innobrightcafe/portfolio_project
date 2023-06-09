import React from 'react'
import './testimonials.css'
import Avt1 from '../../assets/Never Go Away.jpg'
import Avt2 from '../../assets/Never Go Away.jpg'
import Avt3 from '../../assets/Never Go Away.jpg'
import Avt4 from '../../assets/Never Go Away.jpg'

// import Swiper core and required modules
import {Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: Avt1,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Cum assumenda quas itaque dignissimos voluptates inventore, in minima fugiat sed sequi veritatis reprehenderit architecto ratione. Odio eos aut possimus saepe quod.'
  },
  {
    avatar: Avt2,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Cum assumenda quas itaque dignissimos voluptates inventore, in minima fugiat sed sequi veritatis reprehenderit architecto ratione. Odio eos aut possimus saepe quod.'
  },
  {
    avatar: Avt3,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Cum assumenda quas itaque dignissimos voluptates inventore, in minima fugiat sed sequi veritatis reprehenderit architecto ratione. Odio eos aut possimus saepe quod.'
  },
  {
    avatar: Avt4,
    name: 'Tina Snow',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit Cum assumenda quas itaque dignissimos voluptates inventore, in minima fugiat sed sequi veritatis reprehenderit architecto ratione. Odio eos aut possimus saepe quod.'
  },
]

const testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>what my clients are saying</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
      
       // install Swiper modules
       modules={[Pagination,]}
       spaceBetween={40}
       slidesPerView={1}
       pagination={{ clickable: true }}

      >
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className='testimonial'>
              <div className='client__avatar'>
                <img src={avatar} alt={name}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>

              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default testimonials