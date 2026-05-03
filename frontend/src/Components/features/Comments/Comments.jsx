import React from 'react'
import Head from '../../shared/Section_Head/Head'
import './Comments.css'
import MySwiper from '../../shared/Swiper_js/Swiper';
import Comment_1 from './Comments_data/Comment_1';
import Comment_2 from './Comments_data/Comment_2';
import Comment_3 from './Comments_data/Comment_3';

export default function Comments() {

      const comments = [
        <Comment_1 />,
        <Comment_2 />,
        <Comment_3 />,
        ];
 
  
    const section_head = {
        title: "  TESTIMONIALS",
        des1: "What Are They ",
        des2: "Saying About Us"
    } 
  return (
    <>
    <section className='Comments '>
        <div className="container  ">
            <div className="row">
                <div className="col-lg-12 head">
                    <div className="comments_head">
                    <Head data={section_head}/>
                    </div>
                </div>
                <div className="slider">
                <MySwiper data={comments} time='3000' />

                </div>
            </div>
        </div>
    </section>

    
    </>
  )
}
