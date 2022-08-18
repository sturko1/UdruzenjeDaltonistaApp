import React, { useEffect, useState } from "react";

import logo from "../Images/LOGO.png";
import plava from "../Images/plava.png";
import zuta from "../Images/yellow2.png";
import zelena from "../Images/zelena.png";
import crnaPozadinaZutaSlova from "../Images/crnaPozadinaZutaSlova.png";
import bijelaPozadinaCrnaSlova from "../Images/bijelaPozadinaCrnaSlova.png";
import crnaPozadinaBijelaSlova from "../Images/crnaPozadinaBijelaSlova.png";
import minus from "../Images/zoomOut.png";
import A from "../Images/fontAAA.png";
import plus from "../Images/zoomIn.png";

import '../App.css';
import { changeStyleYellow, changeStyleGreen, changeStyleBlue, 
          changeLettersBlack, changeLettersWhite, changeLettersYellow,
           azurirajSveNaslove, azurirajSveNaslove2, 
            azurirajSveNasloveB,azurirajSveTekstove, azurirajSveNasloveH2} from "../Pages/funkcije";


const LogoNavbar = () => {

    const [style, setStyle] = useState("footer-dark");
  
    useEffect (() => {

      const theme = localStorage.getItem("theme");
      switch (theme) {
        case "yellow": 
        changeStyleYellow(); 
        break;

        case "blue": 
        changeStyleBlue(); 
        break;

        case "green": 
        changeStyleGreen(); 
        break;

        default: changeStyleBlue();
      }
   
      const letters = localStorage.getItem("letters");
      switch (letters) {
        case "yellow": 
        changeLettersYellow(); 
        break;

        case "white": 
        changeLettersWhite(); 
        break;

        case "black": 
        changeLettersBlack(); 
        break;

        default: changeLettersWhite();
      }

  const naslovVelicina = localStorage.getItem("naslovVelicina");
  const naslovVelicina2 = localStorage.getItem("naslovVelicina2");
  const naslovVelicinaB = localStorage.getItem("naslovVelicinaB");

  const tekstVelicina = localStorage.getItem("tekstVelicina");

      let temp = 40;   //naslov  1
      let temp2 = 25;   //naslov 2
      let tempB = 45;    //naslov najveci daltonizam
      let txt = 14;   // obicni tekst

      if (naslovVelicina) {
        console.log("jeste");

      localStorage.setItem("naslovVelicina", naslovVelicina);
      azurirajSveNaslove(naslovVelicina);
      localStorage.setItem("naslovVelicina2", naslovVelicina2);
      azurirajSveNaslove2(naslovVelicina2);
      localStorage.setItem("naslovVelicinaB", naslovVelicinaB);
      azurirajSveNasloveB(naslovVelicinaB);
      localStorage.setItem("tekstVelicina", tekstVelicina);
      azurirajSveTekstove(tekstVelicina);
      }
      else {
        console.log("nije");

      localStorage.setItem("naslovVelicina", temp);
      azurirajSveNaslove(temp);
      localStorage.setItem("naslovVelicina2", temp2);
      azurirajSveNaslove2(temp2);
      localStorage.setItem("naslovVelicinaB", tempB);
      azurirajSveNasloveB(tempB);
      localStorage.setItem("tekstVelicina", txt);
      azurirajSveTekstove(txt);
      }


    }, [])

    const povecaj = () => {
      const naslovVelicina = localStorage.getItem("naslovVelicina");
      const naslovHome2 = localStorage.getItem("naslovHome2");
      const naslovVelicina2 = localStorage.getItem("naslovVelicina2");
      const naslovVelicinaB = localStorage.getItem("naslovVelicinaB");
      const tekstVelicina = localStorage.getItem("tekstVelicina");

      let temp = 40;   //naslov  1
      let tempH2 = 35;
      let temp2 = 25;   //naslov 2
      let tempB = 50;    //naslov najveci daltonizam
      let txt = 14;   // obicni tekst

      if (naslovVelicina) {
         temp = parseInt(naslovVelicina);
         //console.log("trenutna velicina e + ", temp);
        if (temp < 100) temp += 5;

      }
      
      if (naslovHome2) {
        tempH2 = parseInt(naslovHome2);
        //console.log("trenutna velicina e + ", temp);
       if (tempH2 < 100) tempH2 += 5;

     }

      if (naslovVelicina2) {
        temp2 = parseInt(naslovVelicina2);
        // console.log("trenutna velicina e + ", temp2);
        if (temp2 < 100) temp2 += 5;
      }

      if (naslovVelicinaB) {
        tempB = parseInt(naslovVelicinaB);
         //console.log("trenutna velicina e + ", tempB);
        if (tempB < 100) tempB += 5;
      }

      if (tekstVelicina) {
        txt = parseInt(tekstVelicina);
        // console.log("trenutna velicina + ", txt);
       if (txt < 100) txt += 5;

     }

      localStorage.setItem("naslovVelicina", temp);
      localStorage.setItem("naslovHome2", tempH2);
      localStorage.setItem("naslovVelicina2", temp2);
      localStorage.setItem("naslovVelicinaB", tempB);
      localStorage.setItem("tekstVelicina", txt);

      azurirajSveTekstove(txt);
      azurirajSveNaslove(temp);
      azurirajSveNasloveH2(tempH2);
      azurirajSveNaslove2(temp2);
      azurirajSveNasloveB(tempB);

    } 

    const smanjiti = () => {
      const naslovVelicina = localStorage.getItem("naslovVelicina");
      const naslovHome2 = localStorage.getItem("naslovHome2");
      const naslovVelicina2 = localStorage.getItem("naslovVelicina2");
      const naslovVelicinaB = localStorage.getItem("naslovVelicinaB");
      const tekstVelicina = localStorage.getItem("tekstVelicina");

      let temp = 40;   //naslov  1
      let tempH2 = 35; //Home naslov 2
      let temp2 = 25;   //naslov 2
      let tempB = 50;    //naslov najveci daltonizam
      let txt = 14;   // obicni tekst

      if (naslovVelicina) {
         temp = parseInt(naslovVelicina);
        if (temp > 10) temp -= 5;

      }

      if (naslovHome2) {
        tempH2 = parseInt(naslovHome2);
        //console.log("trenutna velicina e + ", temp);
       if (tempH2 > 10) tempH2 -= 5;

     }

      if (naslovVelicina2) {
        temp2 = parseInt(naslovVelicina2);
       if (temp2 > 10) temp2 -= 5;

     }
     if (naslovVelicinaB) {
      tempB = parseInt(naslovVelicinaB);
       //console.log("trenutna velicina e + ", tempB);
      if (tempB < 100) tempB -= 5;
    }
      
      if (tekstVelicina) {
        txt = parseInt(tekstVelicina);
       if (txt > 10) txt -= 5;

     }

      localStorage.setItem("naslovVelicina", temp);
      localStorage.setItem("naslovHome2", tempH2);
      localStorage.setItem("naslovVelicina2", temp2);
      localStorage.setItem("naslovVelicinaB", tempB);
      localStorage.setItem("tekstVelicina", txt);

      azurirajSveTekstove(txt);
      azurirajSveNaslove(temp);
      azurirajSveNasloveH2(tempH2);
      azurirajSveNaslove2(temp2);
      azurirajSveNasloveB(tempB);
    } 

    return (
      
        <nav className="navbar sticky-top navbar-expand-lg navbar-light " id="logoNavbarBcg">
            <div id="media" className="container">
                <a className="navbar-brand" href="#"> <img className="logo" src={logo} alt="logo" />
                    </a>
       
        <div className="grupice">
            <button className="pozadinaIkone" title="Promijeni boju pozadine u Plavu"><img src={plava} onClick = {changeStyleBlue}  alt="plava pozadina" className="pozadinaSlike"/></button>
            <button className="pozadinaIkone" title="Promijeni boju pozadine u Narandzastu"><img src={zuta} onClick={changeStyleYellow} alt="zuta pozadina" className="pozadinaSlike"/></button>
            <button className="pozadinaIkone" title="Promijeni boju pozadine u Zelenu"><img src={zelena} onClick={changeStyleGreen} alt="zelena pozadina" className="pozadinaSlike"/></button>
        </div>

        <div className="grupice">
            <button className="pozadinaIkone" onClick={changeLettersBlack} title="Promijeni boju slova u Crnu"><img src={bijelaPozadinaCrnaSlova} alt="zuta slova crna pozadina" className="pozadinaSlike"/></button>
            <button className="pozadinaIkone" onClick={changeLettersWhite} title="Promijeni boju slova u Bijelu"><img src={crnaPozadinaBijelaSlova} alt="zuta slova" className="pozadinaSlike"/></button>
            <button className="pozadinaIkone" onClick={changeLettersYellow} title="Promijeni boju slova u Žutu"><img src={crnaPozadinaZutaSlova} alt="crna slova" className="pozadinaSlike"/></button>
        </div>

        <div className="grupice">
            <button  className ="font" onClick={smanjiti} title="Smanji font teksta"><img src={minus} className="slika" /></button>
            <button  className ="fontSpecial"><img className="slika" src={A}/></button>
            <button  className ="font" onClick={povecaj} title="Povećaj font teksta"> <img src={plus} className="slika" /></button>
          </div>
        </div>
   
</nav>




/*

<nav className="navbar navbar-expand-lg navbar-light" id="navbarBackground">
            <div className="container">
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav ml-auto">

                    <li className="nav-item active">
                      <button className="pozadinaIkone"><img src={plava} onClick = {changeStyleBlue} alt="plava pozadina" className="pozadinaSlike"/></button>
                    </li>

                    <li className="nav-item">
                      <button className="pozadinaIkone"><img src={zuta} onClick={changeStyleYellow} alt="zuta pozadina" className="pozadinaSlike"/></button>
                    </li>

                    <li className="nav-item">
                      <button className="pozadinaIkone"><img src={zelena} onClick={changeStyleGreen} alt="zelena pozadina" className="pozadinaSlike"/></button>
                    </li>





                    <li className="nav-item">
                      <button className="pozadinaIkone" onClick={changeLettersBlack} ><img src={bijelaPozadinaCrnaSlova} alt="zuta slova crna pozadina" className="pozadinaSlike"/></button>
                    </li>

                    <li className="nav-item">
                      <button className="pozadinaIkone" onClick={changeLettersWhite}><img src={crnaPozadinaBijelaSlova} alt="zuta slova" className="pozadinaSlike"/></button>
                    </li>

                    <li className="nav-item">
                      <button className="pozadinaIkone" onClick={changeLettersYellow} ><img src={crnaPozadinaZutaSlova} alt="crna slova" className="pozadinaSlike"/></button>                    
                    </li>





                    <li className="nav-item">
                      <button className="pozadinaIkone" onClick={smanjiti}><img src={minus} className="slika" /></button>
                    </li>

                    <li className="nav-item">
                      <button className="pozadinaIkone" ><img className="slika" src={A} /></button>
                    </li>

                    <li className="nav-item">
                      <button className="pozadinaIkone" onClick={povecaj}><img src={plus} className="slika" /></button>
                    </li>


                </ul>
           
                </div>
            </div>
</nav>*/


        )
}

export default LogoNavbar