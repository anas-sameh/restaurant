import './Gallery.css'
import Head from '../../shared/Section_Head/Head'
import MySwiper from '../../shared/Swiper_js/Swiper'
import Gallery_data, { galleryData } from './Gallery_data/Gallery_data';
import React, { useState } from 'react';
export default function Gallery() {
    const section_head = {
        title: "  Gallery",
        des1: "Check Our ",
        des2: "Gallery "
    }
    
    const [currentIndex, setCurrentIndex] = useState(null);

    const handleClose = () => setCurrentIndex(null);
    const showPrev = () =>
      setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1));
    const showNext = () =>
      setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1));
  
    const gallery = Gallery_data(setCurrentIndex);
  
    

  return (
    <>
    <section className='Gallery' id='gallery'>
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <Head data={section_head} />
                </div>
                <div className="col-lg-12">
                    <MySwiper data={gallery} configKey="default5" timeConfig="slow" />                       
                </div>
            </div>
        </div>

    </section>
    
    {currentIndex !== null && (
        <div className="modal-overlay" onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleClose}><i className="fa-solid fa-square-xmark"></i></button>
            <button className="nav-btn left" onClick={showPrev}><i className="fa-solid fa-arrow-left"></i></button>
            <img src={galleryData[currentIndex].img} alt="" className="modal-img" />
            <button className="nav-btn right" onClick={showNext}><i className="fa-solid fa-arrow-right"></i></button>
          </div>
        </div>
      )}
    
    
    
    </>
  )
}
