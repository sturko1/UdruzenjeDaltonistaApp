import React, {useEffect} from 'react';
import '../App.css';
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider'

import daltonismImage from "../Images/DALTONISMh.png";
import Slika1 from "../Images/Slika1.jpg";
import Slika11 from "../Images/Slika1-1.webp";
import Slika2 from "../Images/Slika2.webp";
import Slika21 from "../Images/Slika2-1.webp";
import enhromaTest from "../Images/enchromaTest.png";
import enhromaTestKids from "../Images/enhromaTestKids.png";
import {changeStyleBlue, changeStyleGreen, changeStyleYellow, changeLettersWhite, changeLettersBlack, changeLettersYellow,
  azurirajSveNaslove, azurirajSveNaslove2, azurirajSveNasloveB, azurirajSveTekstove} from "./funkcije.js";

function Daltonism() {

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
           <div  id = "sveD">
            <div className="container">
                {/*naslov*/}
                <br></br>
                <div className="bg-light" >
                <img src={daltonismImage} />
                    <h1 className="text-left" id="naslovDB">Šta je DALTONIZAM? </h1>
                    
                </div>

                {/*clanak*/}
                <div>
                  <br></br>
                    <p id="tekstD1">Boja. Utječe na svaki dio našeg života. Boja odražava emociju i daje umjetnosti život. Mami nas da jedemo određenu hranu i kupimo određeni nakit, a ponekad i doslovno definira te stvari. Boju koristimo za tumačenje informacija kao što su znakovi i svjetla. To je duboko ukorijenjeno u našu osnovnu percepciju svijeta. Kada je sposobnost razlikovanja boja smanjena, kao u slučaju sljepoće za boje, to jeste daltonizma, dolazi do zatupljenja onoga što se vidi.</p>
                </div>

                <div>
                    <h3 id="naslovD1">Definicija daltonizma</h3>
                    <p id="tekstD2">Daltonizam ili sljepoća za boje predstavlja smanjenu sposobnost razlikovanja boja u usporedbi sa standardom za normalan ljudski vid boja. Kada je osoba slijepa za boje, obično ima poteškoća u razlikovanju određenih boja kao što su žuta i narančasta, zelena i smeđa, ružičasta i siva ili plava i ljubičasta. Ove su zabune tipične za ono što se naziva "crveno-zelena sljepoća za boje", što uključuje KVB protanskog tipa (protanomalija i protanopija) i KVB tipa deutan (deuteranomalija i deuteranopija). Crveno-zeleni oblik daltonizma obično se nasljeđuje preko X-vezanih recesivnih gena. Postoje i druge vrste sljepoće za boje, kao što je CVD tipa tritana, koji se također naziva plavo-žuta sljepoća za boje. Ona je povezana s nemogućnošću da se vide nijanse plave, te nemogućnošću razlikovanja plave i zelene boje. Plavo-žuti oblik daltonizma obično je uzrokovan očnim stanjima vezanim za starenje, kao što je glaukom, ili izloženost određenim hemikalijama ili medicinskim tretmanima. U vrlo rijetkim slučajevima osoba može biti potpuno slijepa za boje, što znači da vidi samo intenzitet svjetla, ali ne i njegovu boju. To se zove monokromatija ili akromatopsija. Ahromatopsija može biti naslijeđena, ali također može biti posljedica progresivne očne bolesti kao što je retinitis pigmentosa. Ukratko, postoji mnogo vrsta i nivoa onoga što se može smatrati "sljepoćom za boje", u rasponu od djelomičnog do potpunog nedostatka razlikovanja boja.</p>
                   

                </div>
                <div>
                  <br></br>
                    <h3 id="naslovD2"> Kako osobe s daltonizmom vide? </h3>
                    <p id="tekstD3">Mnogi zbog imena pretpostavljaju da "slijepi na boje" znači da osoba može vidjeti samo crno-bijelo. Zapravo, velika većina ljudi s daltonizmom vide boje, ali vide mnogo manji raspon nijansi boja u usporedbi s osobom s normalnim vidom boja. Osim toga, osoba s daltonizmom može propustiti detalje ili ne primijetiti predmete koji bi inače bili jasno vidljivi, jer je boja detalja ili predmeta zbunjujuće slična okolnom vizualnom kontekstu. Klasičan primjer je nemoćnost primjećivanja zrele crvene jabuke na stablu kada je okruženo zelenim lišćem.</p>
                    <br></br>
                    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage
          src={Slika1}
          alt="one"
        />
        
      }
     
      itemTwo={
        <ReactCompareSliderImage
          src={Slika11}
          alt="two"
        />
      }
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        
      }}
    /> <br></br>
                    <p id="tekstD4">Ljudi imaju tri primarne vrste svjetlosnih receptorskih stanica u mrežnici koje široko reaguju na crvenu, zelenu i plavu svjetlost. Signali iz ovih receptorskih stanica čine osnovu vida boja, prenoseći neuralne signale u mozak o relativnoj količini svake primarne boje do vizualnog korteksa. Procjenjuje se da ljudski vizualni korteks može percipirati oko 100 razina osjetljivosti za svaki primarni kanal: 100 x 100 x 100 = 1 milijun, to jeste 1 milijun percipiranih nijansi različite boje.</p>

                    <p id="tekstD5">Međutim, ako je osoba slijepa na boje, na primjer ima crveno-zelenu sljepoću za boje, tada se primarni i crveni kanali preklapaju u svojim signalima zbog čega kanali sadrže gotovo iste informacije. U najekstremnijem slučaju, zvanom dikromatija, crveni i zeleni kanali se potpuno ne razlikuju, tako da je ukupan broj boja koje se mogu vidjeti samo 100 x 100 = 10 tisuća ili samo 1% normalnog raspona. Većina ljudi s daltonizmom ima samo djelomični gubitak osjetljivosti, što znači da su informacije tu, ali ih je teže primijetiti. Ovisno o ozbiljnosti, broj jedinstvenih nijansi boje koje se mogu vidjeti češće se procjenjuje na oko 10% normalnog.</p>
                    <br></br>
                    <ReactCompareSlider
      itemOne={
        <ReactCompareSliderImage
          src={Slika2}
          alt="one"
        />
        
      }
     
      itemTwo={
        <ReactCompareSliderImage
          src={Slika21}
          alt="two"
        />
      }
      style={{
        display: "flex",
        width: "100%",
        height: "50vh",
        
      }}
    />
  </div>



                <div>
                  <br></br>
                    <h3 id="naslovD3">Testirajte svoj vid</h3>
                    <p id="tekstD6">Ako Vi ili Vas član obitelji ima problema s prepoznavanjem ili razlikovanjem boja koje drugi ljudi naizgled vide, možete vrlo jednostavno odrediti jeste li daltonisti i to bez posjeta oftamologu. EnChroma test za sljepoću za boje je online test dizajniran za procjenu vrste i razine sljepoće za boje. Test je kreirala EnChroma, nezavisna kompanija sa sjedištem u Kaliforniji, EnChroma test za slijepe na boje je #1 online alat za provjeru i otkrivanje raznih oblika daltonizma, koji je do sada probalo više od milion ljudi širom svijeta.</p>
                    <a id = "tekstD7" href="https://enchroma.com/pages/test">Testirajte se odmah!</a>
                    <p></p>
                    <p id="tekstD8">EnChroma test temelji se na klasičnoj i široko korištenoj metodi Ishihara testa „skrivene brojke“ i kombinuje se s računalno prilagodljivim algoritmom za mjerenje vrste i razine nedostatka vida u boji (CVD). Dostupan je u načinu rada s brojevima za odrasle i djecu od 10+ te u obliku oblika za djecu od 5+.</p>
                    <div className = "centerImg"><img src={enhromaTest} /></div> <br></br>
                    <p id="tekstD9">Ishihara test za sljepoću na boje nazvan je po japanskom oftalmologu Shinobu Ishihari koji je izumio test za japansku vojsku 1917. Ishihara je bio odličan test, ali je star 100 godina i ne koristi prednosti današnjeg računala zasnovanog protokoli adaptivnog testiranja. EnChroma test sprječava pamćenje i varanje i može se samostalno provoditi na telefonu ili prijenosnom računaru.</p>
                    <p id="tekstD10">Testiranje djece na sljepoću za boje predstavlja jedinstvene izazove. Vid u boji razvija se rano u djetinjstvu, ali dok dijete ne zna imenovati boje ili brojeve, roditelju, učitelju ili okulistu (ECP) teško je naučiti ima li dijete nedostatak vida boja (CVD). Kao rezultat toga, mnoga djeca s daltonizmom ostaju nedijagnosticirana. Kako bi riješio ovaj problem, EnChroma je 2019. uvela dječji daltonizam koji omogućuje mlađoj djeci da polažu test u "načinu oblika", u kojem identificiranje jednostavnih geometrijskih oblika (kvadrat, krug, trokut) zamjenjuje standardne numeričke simbole.</p>
                    <a id="tekstD11" href="https://enchroma.com/pages/kids-color-blind-test">Enhroma test za djecu!</a><br></br>
                    <br></br><div className = "centerImg"> <img  src={enhromaTestKids} /> </div> <br></br>
                </div>

               


            </div>
</div>
        </>
        
    );
}

export default Daltonism;