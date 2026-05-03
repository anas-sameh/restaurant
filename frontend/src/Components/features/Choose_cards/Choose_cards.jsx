import './Choose_cards.css'
export default function Choose_cards(props){

    const {data} = props

    
  return (

    <>
    
        <div className="data" data-aos="fade">
            <div className='icon'><i className={data.icon}></i></div>
            <h4>{data.title}</h4>
            <p>{data.description}</p>
        </div>
   
    
    
    
    
    </>
  )
}
