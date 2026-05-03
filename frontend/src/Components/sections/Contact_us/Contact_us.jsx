import React from 'react'
import Head from '../../shared/Section_Head/Head'
import './Contact_us.css'
import Contact_cards_data from './Contact_cards_data/Contact_cards_data'

export default function Contact_us() {
    // بيانات عنوان القسم
    const section_head = {
        title: "  Contact   ",
        des1: " Need Help?   ",
        des2: "  Contact Us "
    }

  return (
    <>
    {/* قسم الاتصال */}
    <section className='contact_us' id='contact_us' data-aos="zoom-in-down">
        <div className="container">
            <div className="row justify-content-center">
                {/* عنوان القسم */}
                <div className="col-lg-12">
                    <div className="contact_us_head">
                       <Head data={section_head}/>
                    </div>
                </div>
                {/* خريطة الموقع */}
                <div className="col-lg-12 map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.2219901290355!2d-74.00369368400567!3d40.71312937933185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a23e28c1191%3A0x49f75d3281df052a!2s150%20Park%20Row%2C%20New%20York%2C%20NY%2010007%2C%20USA!5e0!3m2!1sen!2sbg!4v1579767901424!5m2!1sen!2sbg" frameBorder="0"></iframe>
                </div>
                {/* بطاقات الاتصال */}
                <div className="col-lg-12">
                    <div className="row">
                        <Contact_cards_data/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}
