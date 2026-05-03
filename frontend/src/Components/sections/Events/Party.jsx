import React from 'react'

import './Party.css'
import Party_data_1 from './Data_parties/Party_data_1'
import Party_data_2 from './Data_parties/Party_data_2'
import Party_data_3 from './Data_parties/Party_data_3'
import Party_data_4 from './Data_parties/Party_data_4'
import MySwiper from '../../shared/Swiper_js/Swiper'


export default function Party () {
        const party = [
          <Party_data_1 />,
          <Party_data_2 />,
          <Party_data_3 />,
          <Party_data_4 />,
          <Party_data_1 />,
          <Party_data_2 />,
          <Party_data_3 />,
          <Party_data_4 />,
          ];
  return (
    <>
    <section className='Parties' id='events'>
       <div className="parties">
         <MySwiper data={party} configKey="default3" time='2000' />
       </div> 
    </section>
    </>
  )
}
