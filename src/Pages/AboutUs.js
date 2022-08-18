import React, {useEffect} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Slika1 from "../Images/Slika1.jpg";
import Kid from "../Images/kidWithDaltonism.jpg";
import Glasses from "../Images/enchroma-glasses.jpg";
import {changeStyleBlue, changeStyleGreen, changeStyleYellow, changeLettersWhite, changeLettersBlack, changeLettersYellow,
azurirajSveNaslove, azurirajSveNaslove2, azurirajSveNasloveB, azurirajSveTekstove} from "./funkcije.js";

function AboutUs() {

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
           {/*Historija udruženja*/}
            <section className="section" id="sveA1">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading" id = "naslovA1">Historija udruženja</h3>
                            <div className="underline mx-auto"> </div>
                            <p id="tekstA1"> Udruženje osoba s daltonizmom Bosne i Hercegovine je organizacija koja okuplja sve osobe koje imaju poteškoća u raspoznavanju boja, to jeste imaju određeni tip slijeposti na boje. Sa otprilike nekih desetak članova, udruženje je osnovano 2005. godine. Osnivač udruženja bio je Meho Mehić, u tom trenutku penzionisani, diplomirani ekonomista. Danas udruženje broji 105 članova.</p>

                        </div>
                    </div>
                </div>
            </section>

            {/*Ciljevi udruženja*/}
            <section id ="colorChangingSection" className="section bg-c-light border-top" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading" id = "naslovA2"> Ciljevi, vizija i misija udruženja</h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        {/*1*/}
                        <div className="col-md-4 text-center">
                            <h6 id = "naslovA11"> Ciljevi Udruženja </h6>
                            <p id="tekstA10">Okupljanje osoba s daltonizmom radi njihovog organizovanog djelovanja i poboljšanja sveukupnog položaja u društvu.</p>
                            <p id="tekstA2">Poboljšanje i unapređenje uslova za ostvarivanje prava osoba s daltonizmom u oblasti rehabilitacije, informisanja te pomoć pri nabavljanju medicinskih pomagala.</p>
                            <p id="tekstA3">Podsticanje razvoja ličnog integriteta i socijalizacije osoba s daltonizmom, organizovanjem i realizovanjem raznih aktivnosti primjerenih njihovim mogućnostima, sklonostima i potrebama.</p>
                        </div>

                        {/*2*/}
                        <div className="col-md-4 text-center">
                            <h6 id = "naslovA12"> Vizija Udruženja </h6>
                            <p id="tekstA4">Osobe s daltonizmom kao ravnopravni i aktivni članovi u društvenoj zajednici, oslobođeni opterećenja koja daltonizam nosi sa sobom, sa punim samopouzdanjem i vjerom u svoje sposobnosti i prihvaćeni od okoline sa svim svojim specifičnostima.</p>
                        </div>

                        {/*3*/}
                        <div className="col-md-4 text-center">
                            <h6 id = "naslovA13"> Misija Udruženja </h6>
                            <p id="tekstA5">Stvaranje pretpostavki i uslova za socijalno uključivanje, ravnopravno učešće i sveukupnu afirmaciju osoba s daltonizmom u društvenoj zajednici i poduzimanje aktivnsti s ciljem smanjenja i otklanjanja diskriminacije i predrasuda prema osobama s daltonizmom</p>
                        </div>


                    </div>
                </div>
            </section >

            {/*Članstvo*/}
            <section className="section" id = "sveA2">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <h3 className="main-heading" id = "naslovA3">Članstvo u Udruženju</h3>
                            <div className="underline mx-auto"> </div>
                            <p id="tekstA6"> Redovni članovi udruženja mogu postati sve osobe s daltonizmom, osobe koje imaju bilo kakav oblik slijepoće na boje. Pored redovnih, udruženje je otvoreno za sve pomažuće članove, to jeste sva pravna ili dizička lica koja izraze želju da na bilo koji način budu dio udruženja, pomažu ili prate rad Udruženja osoba s daltonizmom Bosne i Hercegovine. </p>

                        </div>
                    </div>
                </div>
            </section>


            {/*Our services      HINT     */}
            <section className="section border-top" id = "sveA3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-6 text-center">
                            <h3 className="main-heading" id = "naslovA4"> Projekti</h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        {/*1*/}
                        <div className="col-md-6 ">
                            <div className="card shadow">
                                <img src={Kid} className="w-100 border-bottom" alt="be" />
                                <div className="card-body">
                                    <h6 id = "naslovA14">Podizanje svijesti o daltonizmu - sljepoći na boje kod djece i mladih</h6>
                                    <div className="underline"></div>
                                    <p id="tekstA7"> Putem raznih radionica, koje su organizovane u osnovnim i srednjim školama širom Bosne i Hercegovine, podizana je svijest o daltonizmu, oboljenju to jeste poremećaju koji je uglavnom urođenog karaktera.  </p>
                                </div>
                            </div>
                        </div>

                        {/*2*/}
                        <div className="col-md-6 ">
                            <div className="card shadow">
                                <img src={Glasses} className="w-100 border-bottom" alt="be" />
                                <div className="card-body">
                                    <h6 id = "naslovA15">Humanitarni bazari i akcije  </h6>
                                    <div className="underline"></div>
                                    <p id="tekstA8"> U cilju prikupljanja sredstava za nabavku "Enchroma" specijalnih naočara, namijenjenih osobama sa poremećajem prepoznavanja boja, organizovani su mnogi bazari i akcije humanitarnog karaktera na koje se odazvao ogroman broj ljudi, među kojima su bile i poznate ličnosti. Kompanija Encrhoma je razvila tehnologiju optičkih sočiva koja selektivno filtriraju talasne dužine svjetlosti na tački gdje dolazi do miješanja ili pretjeranog preklapanja osjetljivosti boja. </p>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                       

                    </div>
                </div>
            </section >

        </>
    );
}

export default AboutUs;