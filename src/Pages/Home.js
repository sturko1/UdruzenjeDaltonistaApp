import React, {useEffect} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Carousel from "../Components/Carousel";
import background from "../Images/pozadina2.jpg";
import Intro from "../Components/intro";
import {changeStyleBlue, changeStyleGreen, changeStyleYellow, changeLettersWhite, changeLettersBlack, changeLettersYellow,
  azurirajSveNaslove, azurirajSveNaslove2, azurirajSveNasloveB, azurirajSveTekstove} from "./funkcije.js";

function Home() {

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

    let temp = 30;
    let temp2 = 20;
    let tempB = 40;
    let txt = 14;


    if (naslovVelicina) {
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


    return (
        <>
    <Intro/>
        
            

        </>
    );
}

export default Home;