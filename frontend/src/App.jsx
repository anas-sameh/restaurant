import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

// Layout Components
import Navbar from './Components/layout/Navbar/Navbar';
import Footer from './Components/layout/Footer/Footer';

// Main Sections
import Home from './Components/sections/Home/Home';
import About from './Components/sections/About/About';
import Menu from './Components/sections/Menu/Menu';
import Gallery from './Components/sections/Gallery/Gallery';

// Feature Sections
import Comments from './Components/features/Comments/Comments';
import Party from './Components/sections/Events/Party';
import Chefs from './Components/sections/Chefs/Chefs';

// Contact Sections
import Form from './Components/forms/Form/Form';
import Contact_us from './Components/sections/Contact_us/Contact_us';
import SplashScreen from './Components/shared/SplashScreen';

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
    // شاشة التحميل تختفي بعد 2.5 ثانية
    const timer = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <SplashScreen />;

  return (
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
      <Footer/>
    </>
  );
}
