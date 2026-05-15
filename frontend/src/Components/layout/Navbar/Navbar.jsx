import { Link, useNavigate } from 'react-router-dom';
import BookTable_btn from '../../shared/Buttons/BookTable_btn';
import 'bootstrap-icons/font/bootstrap-icons.css';
import './Navbar.css';

export default function Navbar() {

  const navigate = useNavigate();

  // user data
  const token = localStorage.getItem('token');

  const userName = localStorage.getItem('userName');

  const userRole = localStorage.getItem('userRole');

  // logout
  const handleLogout = () => {

    localStorage.removeItem('token');
    localStorage.removeItem('userName');
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userRole');

    navigate('/login');

    window.location.reload();
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top shadow-sm">

        <div className="container">

          {/* Logo */}
          <Link className="navbar-brand logo" to="/">
            Yummy <span>.</span>
          </Link>

          {/* Toggle */}
          <button
            className="navbar-toggler border-0 shadow-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Content */}
          <div
            className="collapse navbar-collapse justify-content-between"
            id="navbarNavDropdown"
          >

            {/* Links */}
            <ul className="navbar-nav mx-auto gap-lg-4 gap-3 list">

              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#about">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#menu">
                  Menu
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#events">
                  Events
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#chefs">
                  Chefs
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#gallery">
                  Gallery
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="/#contact_us">
                  Contact
                </a>
              </li>

            </ul>

            {/* Actions */}
            <div className="nav-actions d-flex align-items-center gap-2">

              {/* Cart */}
              <Link to="/cart" className="cart-btn">
                <i className="bi bi-cart3"></i>
              </Link>

              {/* Dashboard for ADMIN */}
              {
                token && userRole === 'ADMIN' && (
                  <Link
                    to="/Dashboard"
                    className="btn dashboard-btn"
                  >
                    Dashboard
                  </Link>
                )
              }

              {/* If Logged In */}
              {
                token ? (
                  <>
                    <span className="user-name">
                      Hi, {userName}
                    </span>

                    <button
                      onClick={handleLogout}
                      className="btn logout-btn"
                    >
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    {/* Login */}
                    <Link
                      to="/login"
                      className="btn login-btn"
                    >
                      Login
                    </Link>

                    {/* Signup */}
                    <Link
                      to="/signup"
                      className="btn signup-btn"
                    >
                      Sign Up
                    </Link>
                  </>
                )
              }

              {/* Book Table */}
              <BookTable_btn className="BookTable_btn_nav" />

            </div>

          </div>

        </div>
      </nav>
    </>
  );
}