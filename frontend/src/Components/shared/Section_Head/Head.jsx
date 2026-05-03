import './Head.css'
export default function Head(props) {
    const {data} = props
  return (
    <>
            <div className="details col-lg-12 head text-center">
                <h2> {data.title}  </h2>
                <span>{data.des1}</span><span className='text-danger'> {data.des2}</span>
            </div>
    </>
  )
}













