import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// الـ Components
import Navbar from './Components/layout/Navbar/Navbar';
import Footer from './Components/layout/Footer/Footer';
import Home from './Components/sections/Home/Home';
import About from './Components/sections/About/About';
import Menu from './Components/sections/Menu/Menu';
import Gallery from './Components/sections/Gallery/Gallery';
import Comments from './Components/features/Comments/Comments';
import Party from './Components/sections/Events/Party';
import Chefs from './Components/sections/Chefs/Chefs';
import Form from './Components/forms/Form/Form';
import Contact_us from './Components/sections/Contact_us/Contact_us';
import Signup from './Components/signup/signup.jsx';
import Login from './Components/login/login.jsx';
import Cart from './Components/cart/cart.jsx';
import Dashboard from './Components/dashBoard/dashBoard.jsx';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* صفحة تسجيل الدخول والساين أب - بدون نافبار */}
        <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />

        {/* 👈 2. صفحة الداش بورد (Admin Panel) */}
        {/* حطيتها مع النافبار عشان الأدمن يقدر يرجع للموقع بسهولة لو حابب */}
        <Route path="/Dashboard" element={
          <>
            <Navbar />
            <Dashboard />
          </>
        } />

        {/* صفحة الكارت */}
        <Route path="/cart" element={
          <>
            <Navbar />
            <Cart />
            <Footer />
          </>
        } />

        {/* الصفحة الرئيسية بكل محتوياتها */}
        <Route path="/" element={
          <>
            <Navbar />
            <Home />
            <About />
            <Menu />
            <Comments />
            <Party />
            <Chefs />
            <Form />
            <Gallery />
            <Contact_us />
            <Footer />
          </>
        } />
      </Routes>
    </Router>
  );
}