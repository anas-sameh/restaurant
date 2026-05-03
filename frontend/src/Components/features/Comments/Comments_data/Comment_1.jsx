import React from 'react'
import Comments_Card from '../Comments_Card/Comments_Card'
import Myswiper from '../../../shared/Swiper_js/Swiper'
import Comment_2 from './Comment_2'
import Comment_3 from './Comment_3'

export default function Comment_1() {

    const rate = [
        {
            name: 'John Larson',
            img: 'https://bootstrapmade.com/content/demo/Yummy/assets/img/testimonials/testimonials-4.jpg',
            description: 'Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.' ,
            job : 'Entrepreneur',
        }
        
    ]
  return (
    <>

    {
        rate.map((item , index ) => {
            return(
                <Comments_Card data={item} key={index} />
            )
        })
    }

    
    
    </>
  )
}
