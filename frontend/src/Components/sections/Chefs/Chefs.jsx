import React from 'react'
import './Chefs.css'
import Head from '../../shared/Section_Head/Head'
import Chef_data from './Chefs_data/Chef_data'
import Svg from '../../shared/Svg/Svg'
export default function Chefs() {
    const section_head = {
        title: "  Chefs",
        des1: "Our ",
        des2: " Proffesional  Chefs"                                                                                                
    }
  return (
    <>
    <section className='Chefs ' id='chefs'  data-aos="fade-up">
        <div className="container">
            <div className="row">
                <div className="col-lg-12 head">
                    <Head data={section_head}/>
                </div>
                <div className="col-lg-12 our_chefs">
                    <div className=" chefs___cards d-flex   " >
                        <Chef_data />
                    </div>
                </div>
            </div>
        </div>
    </section>


    </>
  )
}
