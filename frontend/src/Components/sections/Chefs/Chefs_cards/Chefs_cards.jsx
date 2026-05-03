import React from 'react'
import './Chefs_cards.css'
import Svg from '../../../shared/Svg/Svg'
export default function Chefs_cards(props) {
  const {data} = props
  return (
    <>
   
        
        <div className=" col-lg-4 chef_card">
         <div className="data__card">
         <div className="chef_img">
                <img src={data.img} alt="oops" />  
                <Svg className='svg_img'/>
            </div>
            <div className="icons">
              <a href="#"><i className="fab fa-facebook"></i></a>
              <a href="#"><i className="bi bi-instagram"></i></a>
              <a href="#"><i className="bi bi-twitter-x"></i></a>
              <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
            <div className="chef_details">
                <h4>{data.name}</h4>
                <span>{data.job}</span>
                <p>{data.description}</p>
            </div>
         </div>
        </div>
       
        
    
    
    </>
  )
}
