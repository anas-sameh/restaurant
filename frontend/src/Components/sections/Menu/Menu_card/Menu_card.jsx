import './Menu_card.css'

export default function Menu_card(props) {
    const {data} = props

    
  return (
    <>
  
     <div className="col-lg-4 mt-3" data-aos="fade-up">
     <div className="menu_card">
            <div className="body_card text-center">
                 <div className="card_img">
                        <img src={data?.img ?? ""} alt='oops'/>
                </div>
                <div className="card_text">
                        <h4>{data.name}</h4>
                        <p>{data.description} </p>
                        <p className='price'>{data.price} $</p>       
                </div>
            </div>
        </div>
     </div>
                


    </>
  )
}
