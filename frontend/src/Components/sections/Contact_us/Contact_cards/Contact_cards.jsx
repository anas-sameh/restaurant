// استيراد المكتبات المطلوبة
import React from 'react'
import './Contact_cards.css'    

export default function Contact_cards(props) {
    // استخراج البيانات من الخصائص
    const {data} = props

  return (
    <>
    <div className="col-lg-4">
        {/* بطاقة الاتصال */}
        <div className="contact-card">
            {/* أيقونة البطاقة */}
            <div className="icon">
                <i className={data.icon}></i>
            </div>
            {/* محتوى البطاقة */}
            <div className="text">
                <h4>{data.title}</h4>
                <p>{data.description}</p>
            </div>
        </div>
    </div>
    </>
  )
}
