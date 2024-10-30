import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Services from './pages/services/Services';
import ContactUs from './pages/contactUS/ContactUs';
import Carrier from './pages/carrier/Carrier';
import Footer from './components/footer/Footer';

 

function App() {
  return (
    <>
      <Router>
        <Hero/>
       <Navbar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<Services/>} />
        <Route path="/contact" element={<ContactUs/>} />
        <Route path='/carrier' element={<Carrier/>}/>
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;