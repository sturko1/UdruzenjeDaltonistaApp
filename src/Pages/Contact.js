import React, {useEffect} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import emailjs from 'emailjs-com';
import {changeStyleBlue, changeStyleGreen, changeStyleYellow, changeLettersWhite, changeLettersBlack, changeLettersYellow,
    azurirajSveNaslove, azurirajSveNaslove2, azurirajSveNasloveB, azurirajSveTekstove} from "./funkcije.js";

function Contact() {



    function sendEmail (e) {
        e.preventDefault();

        emailjs.sendForm('service_99c5g03','template_c13gd8d',e.target,'gszlD7WkVDymG3q4e')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text)
        });
        e.target.reset() ;       
    }

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

        default: changeLettersBlack();
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
            
            <section className="section border-top" id="sveK" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 id = "naslovK1" className="main-heading"> Kontakti </h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        {/*1*/}
                        <div className="col-md-6">
                            <div className="card shadow">

                                <div className="card-body">
                                    <h6 id = "naslovK11"> Kontakt </h6>
                                    <div className="underline"></div>
                                    <p id="tekstK1">Tel: +387 33 111 111<br />Fax: +387 33 222 222</p>
                                    <p id="tekstK2">email: udruzenjedaltonistabih@bih.net.ba</p>
                                    <p id="tekstK3">Huso Husić - predsjednik Udruženja <br />Fata Fatić - direktorica Udruženja</p>
                                    <h6 id = "naslovK12"> Kontaktirajte nas </h6>

                                    <form onSubmit={sendEmail}>
                                        <div className="form-group">
                                            <input type="text" name="name" className="form-control" placeholder="Ime" />
                                        </div>
                                        <div className="form-group">
                                            <input type="text" name="surname" className="form-control" placeholder="Prezime" />
                                        </div>
                                        <div className="form-group ">
                                            <input type="email" name="user_email" className="form-control" placeholder="Email" />
                                        </div>
                                        <div className="form-group">
                                            <input type="tel" name="phone" className="form-control" placeholder="Telefon" />
                                        </div>
                                        <textarea name="message" className="form-control" cols="30" rows="3" placeholder="Poruka" />
                                        <input type="submit" value="Send"/>


                                    </form>

                                </div>

                            </div>
                        </div>

                        {/*2*/}
                        <div className="col-md-6 ">
                            <div className="card shadow">

                                <div className="card-body">
                                    <h6 id = "naslovK13"> Naša lokacija </h6>
                                    <div className="underline"></div>
                                    <div className="col-md-12">
                                        <iframe src="https://www.google.com/maps/d/embed?mid=13kYaYcZelAWGIhrrqDrGw_KUyzb7GwEm&ehbc=2E312F"
                                            style={{
                                                border: '0',
                                                width: '100%',
                                                height: '315px',
                                                frameborder: '0'
                                            }} allowFullScreen />
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </section >

        </>
    );
}

export default Contact;