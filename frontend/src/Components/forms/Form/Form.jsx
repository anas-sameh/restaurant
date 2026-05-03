import React, { useState } from 'react'
import './Form.css';
import BookTable_btn from '../../shared/Buttons/BookTable_btn';
import Head from '../../shared/Section_Head/Head';

export default function Form() {
    const section_head = {
        title: "  Book a Table  ",
        des1: "Book Your  ",
        des2: " Stay with us"
    }
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        people: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // هنا يمكنك إضافة الكود لإرسال البيانات
        console.log(formData);
      };
    
      return (
    <>
   <section className='stay_with_us'>
    <div className="container">
        <div className="row form_head">
            <Head data={section_head}/>
        </div>
    </div>
  
        <div className="container form">
            <div className="row align-items-center">
                <div className="col-lg-4 mb-2 ">
                    <div className="form_img">
                        <img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/reservation.jpg" alt="" />
                    </div>
                </div>
                <div className="col-lg-8 form_input ">
                    <div className="row  ">
                        <div className="col-lg-4">
                            <input type="text" placeholder='Your Name' onChange={handleChange} name='name' />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder='Your Email' onChange={handleChange} name='name' />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder='Your Phone' onChange={handleChange} name='name' />
                        </div>
                        <div className="col-lg-4">
                            <input type="date" placeholder='Your Name' onChange={handleChange} name='name' />
                        </div>
                        <div className="col-lg-4">
                            <input type="time" placeholder='Your Name' onChange={handleChange} name='name' />
                        </div>
                        <div className="col-lg-4">
                            <input type="text" placeholder='# Of People' onChange={handleChange} name='name' />
                        </div>
                        <div className="col-lg-12">
                            <textarea  placeholder='Message' onChange={handleChange} name='name' />
                        </div>
                        
                    </div>
                    <div className="form_btn text-center mt-2 mb-5">
                    <BookTable_btn  className='rounded-1 py-2 ps-5 pe-5 '/>
                    </div>
    
                    
                </div>
        </div>
    </div>
   </section>
 </>
      )}   
