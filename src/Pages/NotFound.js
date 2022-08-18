import React, {useEffect} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Carousel from "../Components/Carousel";
import Footer from "../Components/Footer";
import { Link } from 'react-router-dom';
import {changeStyleBlue, changeStyleGreen, changeStyleYellow, changeLettersWhite, changeLettersBlack, changeLettersYellow,
    azurirajSveNaslove, azurirajSveNaslove2, azurirajSveNasloveB, azurirajSveTekstove} from "./funkcije.js";

function NotFound() {
    
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
          azurirajSveNaslove(temp);
          localStorage.setItem("naslovVelicina2", naslovVelicina2);
          azurirajSveNaslove2(temp2);
          localStorage.setItem("naslovVelicinaB", naslovVelicinaB);
          azurirajSveNasloveB(tempB);
          localStorage.setItem("tekstVelicina", tekstVelicina);
          azurirajSveTekstove(txt);
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
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="error-template">
                        <h1>Ops!</h1>
                        <h2>Greška 404 Not Found!</h2>
                        <div className="error-details">
                            Došlo je do greške. Stranica ne postoji!
                        </div>

                        <div className="error-actions">
                            <Link to="/" className="btn btn-outline-primary btn-lg">
                                <i className="fas fa-home" />
                                &nbsp; Nazad na početnu
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NotFound;