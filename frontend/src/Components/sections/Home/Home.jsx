import BookTable_btn from '../../shared/Buttons/BookTable_btn'
import Video_btn from '../../shared/Buttons/Video_btn'
import './Home.css'
export default function Home() {
  return (
    <>
    
   <section className='Home'  data-aos="fade"  >
   <div className="container ">
        <div className="row justify-content-lg-between hero align-items-center ">
            <div className="col-lg-6  order-2 order-md-1">
                <div className="details">
                    <h1>Enjoy Your Healthy <br />
                    Delicious Food</h1>
                    <p>We are team of talented designers making websites with Bootstrap</p>
                </div>
                <div className="btns  ">
                    <BookTable_btn className='me-4 mb-2'/>
                   <Video_btn className='video_btn' />

                </div>


            </div>
            <div className="col-lg-6 img-p order-1 order-md-2 " data-aos="flip-right" data-aos-delay="200" data-aos-duration="1500">
                <div className="img">
                    <img src="https://bootstrapmade.com/content/demo/Yummy/assets/img/hero-img.png" alt="oops" />
                </div>

            </div>

        </div>
    </div>
   </section>
    
    
    
    </>
  )
}
