import React, {useEffect, useState} from 'react';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import genetika from "../Images/genetika.png";
import menVsWomen from "../Images/menVsWomen.jpg";
import populacija from "../Images/populacija.webp";
import kikiriki from "../Images/kikiriki.webp";
import bebe from "../Images/bebe.webp";
import banane from "../Images/banane.webp";
import paun from "../Images/paun.webp";
import dog from "../Images/dog.jpg";
import duga from "../Images/duga.jpeg";
import job from "../Images/job.jpg";
import mantisima from "../Images/mantisima.jpg";
import oneEye from "../Images/oneEye.jpg";
import {changeStyleBlue, changeStyleGreen, changeStyleYellow, changeLettersWhite, changeLettersBlack, changeLettersYellow,
    azurirajSveNaslove, azurirajSveNaslove2, azurirajSveNasloveB, azurirajSveTekstove} from "./funkcije.js";

function Zanimljivosti() {

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
          
    
      const [isReadMoreShown1, setReadMoreShown1] = 
      useState(false)
      const toggleBtn1 = () => {
          setReadMoreShown1 (prevState => !prevState)
      }

      const [isReadMoreShown2, setReadMoreShown2] = 
      useState(false)
      const toggleBtn2 = () => {
          setReadMoreShown2 (prevState => !prevState)
      }

      const [isReadMoreShown3, setReadMoreShown3] = 
      useState(false)
      const toggleBtn3 = () => {
          setReadMoreShown3 (prevState => !prevState)
      }

      const [isReadMoreShown4, setReadMoreShown4] = 
      useState(false)
      const toggleBtn4 = () => {
          setReadMoreShown4 (prevState => !prevState)
      }

    return (
        <>
          
            {/*Our services      HINT     */}
            <section className="section border-top" id = "sveZ1" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading" id="naslov11"> Genetika slijepila na boje</h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        {/*1*/}
                        <div className="col-md-4 ">
                            <div className="card shadow ">
                                <img src={populacija} className="w-100 border-bottom zanImg" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov21"> Svjetska populacija </h6>
                                    <div className="underline"></div>
                                    <p id="tekst1"> Procjenjuje se da na svijetu postoji 300 milijuna daltonista! U svijetu živi oko 8% muškaraca i 0.5% žena s ovim poremećajem. Daltonizam pogađa svaku 200-tu ženu i svakog dvanaestog muškarca. </p>
                                </div>
                            </div>
                        </div>

                        {/*2 READ MORE */  }
                        <div className="col-md-4 ">
                            <div className="card shadow ">
                                <img src={menVsWomen} className="w-100 border-bottom zanImg" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov22"> Muškarci ili žene?</h6>
                                    <div className="underline"></div>
                                   
                                    

                                    {isReadMoreShown1 ?  <p id="tekst2"> Sljepoća za boje je češća nego što mislite! 1 od 12 muškaraca je slijep na boje, dok samo 1 od 200 žena ima to stanje. To znači da 95% zajednice daltonista čine muškarci. 98% osoba s daltonizmom ima crveno-zelenu sljepoću. </p> 
                                    :  <p id="tekst2"> Sljepoća za boje je češća nego što mislite! 1 od 12 muškaraca je slijep na boje, dok samo 1 od 200 žena ima to stanje. To znači da 95% zajednice daltonista čine muškarci. 98%...</p>}
                                   
                                    <button id="z-button1" className="z-button" onClick={toggleBtn1}> {isReadMoreShown1 ? 'Sakrij' : 'Proširi'}</button>
                                </div>
                            </div>
                        </div>
                        <br></br>
                        <br></br>
                        {/*3*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={genetika} className="w-100 border-bottom zanImg" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov23">Naslijeđivanje </h6>
                                    <div className="underline"></div>


                                    {isReadMoreShown2 ?  <p id="tekst3"> Crveno-zelena daltonizam se prenosi preko majke na X-kromosomu. Međutim, postoje različiti načini na koji se "gen za sljepoću za boje" može pojaviti! Žene mogu biti nositelji gena za slijepe na boje i prenijeti mutaciju niz obiteljsku liniju. Ako je samo otac slijep za boje, postoji 100% šansa da će njegove kćeri nositi gen, ali one same neće biti slijepe na boje. </p> 
                                    :  <p id="tekst3"> Crveno-zelena daltonizam se prenosi preko majke na X-kromosomu. Međutim, postoje različiti načini na koji se "gen za sljepoću za boje" može pojaviti! Žene mogu biti nositelj...</p>}
                                   
                                    <button id="z-button2" className="z-button" onClick={toggleBtn2}> {isReadMoreShown2 ? 'Sakrij' : 'Proširi'}</button>


                                    
                                </div>
                            </div>
                            <br></br>
                        </div>

                        {/*novi */}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={bebe} className="w-100 border-bottom zanImg2" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov24"> Bebe </h6>
                                    <div className="underline"></div>
                                    <p id="tekst4"> Bebe se rađaju slijepe za boje! Kako rastu, njihov se vid boja poboljšava i obično se potpuno razvija do dobi od 6 mjeseci. </p>
                                </div>
                            </div>
                        </div>

                        {/*2*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={oneEye} className="w-100 border-bottom zanImg2" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov25"> Jednooki daltonizam </h6>
                                    <div className="underline"></div>
                                    <p id="tekst5"> Moguće je biti daltonist na jednom oku i imati normalan vid boja na drugom. To se zove jednostrana dikromatija i vrlo je rijetko.</p>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={kikiriki} className="w-100 border-bottom zanImg2" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov26"> Kiriki puter je žute boje? </h6>
                                    <div className="underline"></div>
                                    <p id="tekst6"> Ljudi koji su crveno-zeleni daltonisti često se iznenade kad otkriju da puter od kikirikija NIJE zelen! </p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div> <br></br>
            </section >

            {/*zivotinje i daltonizam*/}

            <section className="section border-top" id = "sveZ2" >
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading" id="naslov12"> Životinje i vid u boji </h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        {/*1*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={mantisima} className="w-100 border-bottom zanImg3" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov27"> Morske životinje </h6>
                                    <div className="underline"></div>
                                    <p id="tekst7">Kozica bogomoljke ima 12 vrsta konusnih ćelija, 4 puta više od ljudi! Naučnici još nisu sigurni zašto imaju tako složen vizualni sistem, ali je poznato da ova životinja može vidjeti infracrveno i ultraljubičasto svjetlo. </p>
                                </div>
                            </div>
                        </div>

                        {/*2*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={dog} className="w-100 border-bottom zanImg3" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov28"> Krzneni ljubimci </h6>
                                    <div className="underline"></div>
                                    <p id="tekst8">Suprotno popularnom mišljenju, psi zapravo ne vide crno-bijelo. Oni su dihromati, što znači da imaju dvije vrste konusnih stanica i vide uglavnom plavu i žutu boju. Njihov je vid donekle sličan vidu boja slijepih ljudi. </p>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={paun} className="w-100 border-bottom zanImg3" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov29"> Paunovo perje </h6>
                                    <div className="underline"></div>
                                    
                                
                                    {isReadMoreShown3 ?  <p id="tekst9">Paunovi su poznati po svom šarenom perju perja koje zasljepljuje ljude. Međutim, ono što je najvažnije za paun je broj tragova u obliku očiju na krajevima perja. Paunovi vide ove 'oči' u ultraljubičastom svjetlu, pa što više očiju ima mužjak pauna, to je privlačniji kao partner.</p>
                                    :  <p id="tekst9">Paunovi su poznati po svom šarenom perju perja koje zasljepljuje ljude. Međutim, ono što je najvažnije za paun je broj tragova u obliku očiju na krajevima perja. Paunovi vid...</p>}
                                   
                                    <button id="z-button3" className="z-button" onClick={toggleBtn3}> {isReadMoreShown3 ? 'Sakrij' : 'Proširi'}</button>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section >

            {/*Izazovi osoba s daltonizmom*/}
            <section className="section border-top" id = "sveZ3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mb-4 text-center">
                            <h3 className="main-heading" id="naslov13"> Izazovi osoba s daltonizmom </h3>
                            <div className="underline mx-auto"></div>
                        </div>

                        {/*1*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={job} className="w-100 border-bottom zanImg4" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov210"> Poslovne prilike </h6>
                                    <div className="underline"></div>
                                    
                                    {isReadMoreShown4 ?  <p id="tekst10">U nekim zemljama , za osobe koje su slijepe na boje postoje prepreke za bavljenje određenim poslom. U Engleskoj vas sljepoća za boje može spriječiti da postanete doktor; u SAD-u se ne može dobiti pilotska dozvola; u Rumuniji polaganje vozačkog ispita nije dozvoljeno za osobe sa nekim oblikom daltonizma, a u mnogim dijelovima svijeta teško je postati električar.</p> 
                                    :  <p id="tekst10">U nekim zemljama , za osobe koje su slijepe na boje postoje prepreke za bavljenje određenim poslom. U Engleskoj vas...</p>}
                                   
                                    <button id="z-button4" className="z-button" onClick={toggleBtn4}> {isReadMoreShown4 ? 'Sakrij' : 'Proširi'}</button>
                                    
                                    
                                </div>
                            </div>
                        </div>

                        {/*2*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={duga} className="w-100 border-bottom zanImg4" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov211"> Dugine boje </h6>
                                    <div className="underline"></div>
                                    <p id="tekst11">Za osobu s normalnim vidom, duga ima sve dugine boje. Za mnoge slijepe na boje, međutim, čini se da duga ima samo 2 ili 3 boje: plavu i žutu. </p>
                                </div>
                            </div>
                        </div>

                        {/*3*/}
                        <div className="col-md-4 ">
                            <div className="card shadow">
                                <img src={banane} className="w-100 border-bottom zanImg4" alt="be" />
                                <div className="card-body">
                                    <h6 id="naslov212"> Hrana </h6>
                                    <div className="underline"></div>
                                    <p id="tekst12">Nezrela ili zrela banana, dovoljno ili nedovoljno ispečeno meso, jedni su od izazova s kojim se susrecu osobe sa daltonizmom.</p>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </section >

        </>

    );
}

export default Zanimljivosti;
