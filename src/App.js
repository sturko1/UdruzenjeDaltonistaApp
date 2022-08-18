import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LogoNavbar from "./Components/LogoNavbar";
import Navbar from "./Components/Navbar";
import Header from "./Components/Header";
import SmallFooter from "./Components/SmallFooter";
import SmallFooter2 from "./Components/SmallFooter2";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Daltonism from "./Pages/Daltonism";
import AboutUs from "./Pages/AboutUs";
import Zanimljivosti from "./Pages/Zanimljivosti";
import NotFound from "./Pages/NotFound";
import ScrollToTop from './Components/ScrollToTop';
function App() {
    return (
        
            <Router>
            <ScrollToTop/>
            <LogoNavbar />
            <Navbar />

            <Routes>
                <Route exact path="/aboutus" element={<AboutUs />} />



                <Route exact path="/contact" element={<Contact />} />


                <Route exact path="/daltonism" element={<Daltonism />} />


                <Route exact path="/" element={<Home />} />


                <Route exact path="/home" element={<Home />} />

                <Route exact path="/zanimljivosti" element={<Zanimljivosti />} />

                <Route element={<NotFound />} />

            </Routes>

          

            <SmallFooter />
            <SmallFooter2 />
            <Footer />
            </Router>
           
    );
  
}

export default App;

