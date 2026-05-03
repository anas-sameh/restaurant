import BookTable_btn from '../../shared/Buttons/BookTable_btn'
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light pt-3 pb-3 fixed-top ">
  <div className="container">
    <a className="navbar-brand me-0 fs-3 fw-bold" href="#"> Yummy <span className='text-danger fs-3 fw-bold'>.</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-center  " id="navbarNavDropdown">
      <ul className="navbar-nav gap-3 list">
        <li className="nav-item">
          <a className="nav-link active " aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link"  href="#about">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#menu">Menu</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#events">Events</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#chefs">Chefs</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#gallery">Gallery</a>
        </li>

        <li className="nav-item">
          <a className="nav-link" href="#contact_us">Contact</a>
        </li>
      </ul>
      <div className="navbar_res">
        <BookTable_btn className=" BookTable_btn_nav_res " />
      </div>
     
    </div>
       <BookTable_btn className='BookTable_btn_nav'/>
  </div>
</nav>
    </>
  )
}
