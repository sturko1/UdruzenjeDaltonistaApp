import React from "react";
import '../App.css';
import blue from "../Images/blue2.png";
import green from "../Images/green.png";
import orange from "../Images/orange.png";
import logo2 from "../Images/LOGO2.png";
import { Link } from 'react-router-dom';

const Intro = () => {
    return (
        
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span id="tekstH1">Udruženje osoba s daltonizmom Bosne i Hercegovine</span>
                    <span id="tekstH2">Službena stranica Udruženja</span>
                    <span id="tekstH3"> Udruženje osnovano s ciljem osnaživanja statusa osoba sa poremećajem raspozavanja boja.</span>
                </div>
        
                <Link to="/aboutus" className="text-center"><button id="introDugme" className="buttonI i-button"> Više </button>
            </Link>

               
            </div>
            <div className="i-right">
                <img src={orange} alt="orange"/>
                <img src={green} alt="green"/>
                <img src={blue} alt="blue"/>
                <img src={logo2} alt="logo"/>
                
            </div>
            
            <div className="blur1" style={{background: "#f68d49"}}></div>
            <div className="blur2" style={{background: "#42a5f5"}}></div>
            <div className="blur3" style={{background: "#8cc63e"}}></div>


        </div>
        
        
    )
}

export default Intro;