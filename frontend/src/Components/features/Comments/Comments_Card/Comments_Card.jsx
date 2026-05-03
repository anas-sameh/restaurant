import './Comments_Card.css'

export default function Comments_Card(props) {
  const {data} = props
  return (
    <>
    <section className='Comments_Card ' data-aos="fade-down">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-6 desc">
              <div className="after"></div>
              <span className='icon me-3'><i className="fa-solid fa-quote-left"></i></span><span className='text1'>{data.description}.</span ><span className='icon ms-3'><i className="fa-solid fa-quote-right"></i></span>
              <h3> {data.name}</h3>
              <h4>{data.job}</h4>
              <span className='stars'><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i></span>
            </div>
            <div className="col-lg-2">
              <div className="comments_img">
                <img src={data.img} alt="oops" />
              </div>
            </div>
          </div>
            
        </div>
    </section>
    
    
    </>
  )
}