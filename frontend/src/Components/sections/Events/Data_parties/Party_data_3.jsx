import React from 'react'
import Party from '../Parties/Party'

export default function Party_data_3() {
   const party_array = [
      {
        img: 'https://bootstrapmade.com/content/demo/Yummy/assets/img/events-3.jpg',
        name: 'Custom Parties',
        description: ' Laborum aperiam atque omnis minus omnis est qui assumenda quos. Quis id sit quibusdam. Esse quisquam ducimus officia ipsum ut quibusdam maxime. Non enim perspiciatis.',
        price: '299',
        
      }
    ]


  return (

    <>
       { party_array.map((item , index ) => 
        { return( <Party data={item} key={index} /> ) })   } 
    </>
  )
}