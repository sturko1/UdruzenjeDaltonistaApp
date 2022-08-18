    //pozadina i slova
    export const changeLettersWhite = () => {

      localStorage.setItem("letters", "white");

      //home
        const pozadinaH = document.getElementById('sve');
        if (pozadinaH)
          pozadinaH.style.backgroundColor = "black";

        const headings = document.querySelectorAll('.main-heading');
          headings.forEach(h => {
            h.style.color = 'white';
        });

          //daltonism
        const pozadinaD = document.getElementById('sveD');
        const pozadinaNaslovaD = document.getElementById('naslovDB');
        if (pozadinaD)  {
          pozadinaD.style.backgroundColor = "black";
          pozadinaNaslovaD.style.backgroundColor = "black"; }

          const tekstD1 = document.getElementById('tekstD1');
          const tekstD2 = document.getElementById('tekstD2');
          const tekstD3 = document.getElementById('tekstD3');
          const tekstD4 = document.getElementById('tekstD4');
          const tekstD5 = document.getElementById('tekstD5');
          const tekstD6 = document.getElementById('tekstD6');
          const tekstD7 = document.getElementById('tekstD7');
          const tekstD8 = document.getElementById('tekstD8');
          const tekstD9 = document.getElementById('tekstD9');
          const tekstD10 = document.getElementById('tekstD10');
          const tekstD11 = document.getElementById('tekstD11');
          const naslovDB = document.getElementById('naslovDB');
          const naslovD1 = document.getElementById('naslovD1');
          const naslovD2 = document.getElementById('naslovD2');
          const naslovD3 = document.getElementById('naslovD3');

         
          const pozadina = document.getElementById("colorChangingSection");

          if(pozadina) {
            pozadina.style.background = "#454746";
          }

          if (tekstD1) {
            tekstD1.style.color = "white";
            tekstD2.style.color = "white";
            tekstD3.style.color = "white";
            tekstD4.style.color = "white";
            tekstD5.style.color = "white";
            tekstD6.style.color = "white";
            tekstD7.style.color = "blue";
            tekstD8.style.color = "white";
            tekstD9.style.color = "white";
            tekstD10.style.color = "white";
            tekstD11.style.color = "blue";
            naslovDB.style.color = "white";
            naslovD1.style.color = "white";
            naslovD2.style.color = "white";
            naslovD3.style.color = "white";
          }

          //Zanimljivosti 
          const pozadinaZ1 = document.getElementById('sveZ1');
          const pozadinaZ2 = document.getElementById('sveZ2');
          const pozadinaZ3 = document.getElementById('sveZ3');
          
          const tekst1 = document.getElementById("tekst1");
          const tekst2 = document.getElementById("tekst2");
          const tekst3 = document.getElementById("tekst3");
          const tekst4 = document.getElementById("tekst4");
          const tekst5 = document.getElementById("tekst5");
          const tekst6 = document.getElementById("tekst6");
          const tekst7 = document.getElementById("tekst7");
          const tekst8 = document.getElementById("tekst8");
          const tekst9 = document.getElementById("tekst9");
          const tekst10 = document.getElementById("tekst10");
          const tekst11 = document.getElementById("tekst11");
          const tekst12 = document.getElementById("tekst12");

          if (pozadinaZ1)  {
            pozadinaZ1.style.backgroundColor = "black";
            pozadinaZ2.style.backgroundColor = "black";
            pozadinaZ3.style.backgroundColor = "black";
          }

          if (tekst1) {
            tekst1.style.color = "black";
            tekst2.style.color = "black";
            tekst3.style.color = "black";
            tekst4.style.color = "black";
            tekst5.style.color = "black";
            tekst6.style.color = "black";
            tekst7.style.color = "black";
            tekst8.style.color = "black";
            tekst9.style.color = "black";
            tekst10.style.color = "black";
            tekst11.style.color = "black";
            tekst12.style.color = "black";
          }

          //Kontakt
          const pozadinaK = document.getElementById('sveK');
          if (pozadinaK)  {
            pozadinaK.style.backgroundColor = "black";
          }

          //O nama
          const pozadinaA1 = document.getElementById('sveA1');
          const pozadinaA2 = document.getElementById('sveA2');
          const pozadinaA3 = document.getElementById('sveA3');

          const tekstA1 = document.getElementById("tekstA1");
          const tekstA2 = document.getElementById("tekstA2");
          const tekstA3 = document.getElementById("tekstA3");
          const tekstA4 = document.getElementById("tekstA4");
          const tekstA5 = document.getElementById("tekstA5");
          const tekstA6 = document.getElementById("tekstA6");
          const tekstA7 = document.getElementById("tekstA7");
          const tekstA8 = document.getElementById("tekstA8");
          const tekstA10 = document.getElementById("tekstA10");
          const naslovA11 = document.getElementById('naslovA11');
          const naslovA12 = document.getElementById('naslovA12');
          const naslovA13 = document.getElementById('naslovA13');
          const naslovA14 = document.getElementById('naslovA14');
          const naslovA15 = document.getElementById('naslovA15');

          if (pozadinaA1)  {
            pozadinaA1.style.backgroundColor = "black";
            pozadinaA2.style.backgroundColor = "black";
            pozadinaA3.style.backgroundColor = "black";
          }

          if(tekstA1) {
            tekstA1.style.color = "white";
            tekstA2.style.color = "white";
            tekstA3.style.color = "white";
            tekstA4.style.color = "white";
            tekstA5.style.color = "white";
            tekstA6.style.color = "white";
            tekstA7.style.color = "black";
            tekstA8.style.color = "black";
            tekstA10.style.color = "white";
          }
          if(naslovA11) {
            naslovA11.style.color = "white";
            naslovA12.style.color = "white";
            naslovA13.style.color = "white";
            naslovA14.style.color = "black";
            naslovA15.style.color = "black";
          }


          //Home Page
          document.body.style.background = "black";
          const naslovH1 = document.getElementById("tekstH1");
          const naslovH2 = document.getElementById("tekstH3");
          if (naslovH1) {
            naslovH1.style.color="white";
            naslovH2.style.color="white";
          }
          
    }    

    export const changeLettersBlack = () => {

      localStorage.setItem("letters", "black");
      //home
      const pozadinaH = document.getElementById('sve');
      if (pozadinaH)
          pozadinaH.style.backgroundColor = "white";

          const headings = document.querySelectorAll('.main-heading');

          headings.forEach(h => {
            h.style.color = 'black';
            
          });

      //daltonism
      const pozadinaD = document.getElementById('sveD');
      const pozadinaNaslovaD = document.getElementById('naslovDB');
      if (pozadinaD) {
        pozadinaD.style.backgroundColor = "white";
        pozadinaNaslovaD.style.backgroundColor = "white";
      }
        const tekstD1 = document.getElementById('tekstD1');
          const tekstD2 = document.getElementById('tekstD2');
          const tekstD3 = document.getElementById('tekstD3');
          const tekstD4 = document.getElementById('tekstD4');
          const tekstD5 = document.getElementById('tekstD5');
          const tekstD6 = document.getElementById('tekstD6');
          const tekstD7 = document.getElementById('tekstD7');
          const tekstD8 = document.getElementById('tekstD8');
          const tekstD9 = document.getElementById('tekstD9');
          const tekstD10 = document.getElementById('tekstD10');
          const tekstD11 = document.getElementById('tekstD11');
          const naslovDB = document.getElementById('naslovDB');
          const naslovD1 = document.getElementById('naslovD1');
          const naslovD2 = document.getElementById('naslovD2');
          const naslovD3 = document.getElementById('naslovD3');
      
          const pozadina = document.getElementById("colorChangingSection");

          if(pozadina) {
            pozadina.style.background = "lightgrey";
          }

          if (tekstD1) {
            tekstD1.style.color = "black";
            tekstD2.style.color = "black";
            tekstD3.style.color = "black";
            tekstD4.style.color = "black";
            tekstD5.style.color = "black";
            tekstD6.style.color = "black";
            tekstD7.style.color = "blue";
            tekstD8.style.color = "black";
            tekstD9.style.color = "black";
            tekstD10.style.color = "black";
            tekstD11.style.color = "blue";
            naslovDB.style.color = "black";
            naslovD1.style.color = "black";
            naslovD2.style.color = "black";
            naslovD3.style.color = "black";
          }

          //Zanimljivosti 
          const pozadinaZ1 = document.getElementById('sveZ1');
          const pozadinaZ2 = document.getElementById('sveZ2');
          const pozadinaZ3 = document.getElementById('sveZ3');
          
          const tekst1 = document.getElementById("tekst1");
          const tekst2 = document.getElementById("tekst2");
          const tekst3 = document.getElementById("tekst3");
          const tekst4 = document.getElementById("tekst4");
          const tekst5 = document.getElementById("tekst5");
          const tekst6 = document.getElementById("tekst6");
          const tekst7 = document.getElementById("tekst7");
          const tekst8 = document.getElementById("tekst8");
          const tekst9 = document.getElementById("tekst9");
          const tekst10 = document.getElementById("tekst10");
          const tekst11 = document.getElementById("tekst11");
          const tekst12 = document.getElementById("tekst12");

          if (pozadinaZ1)  {
            pozadinaZ1.style.backgroundColor = "white";
            pozadinaZ2.style.backgroundColor = "white";
            pozadinaZ3.style.backgroundColor = "white";
          }

          if (tekst1) {
            tekst1.style.color = "black";
            tekst2.style.color = "black";
            tekst3.style.color = "black";
            tekst4.style.color = "black";
            tekst5.style.color = "black";
            tekst6.style.color = "black";
            tekst7.style.color = "black";
            tekst8.style.color = "black";
            tekst9.style.color = "black";
            tekst10.style.color = "black";
            tekst11.style.color = "black";
            tekst12.style.color = "black";
          }

          //Kontakt
          const pozadinaK = document.getElementById('sveK');
          if (pozadinaK)  {
            pozadinaK.style.backgroundColor = "white";
          }

            //O nama
            const pozadinaA1 = document.getElementById('sveA1');
            const pozadinaA2 = document.getElementById('sveA2');
            const pozadinaA3 = document.getElementById('sveA3');
    
            const tekstA1 = document.getElementById("tekstA1");
          const tekstA2 = document.getElementById("tekstA2");
          const tekstA3 = document.getElementById("tekstA3");
          const tekstA4 = document.getElementById("tekstA4");
          const tekstA5 = document.getElementById("tekstA5");
          const tekstA6 = document.getElementById("tekstA6");
          const tekstA7 = document.getElementById("tekstA7");
          const tekstA8 = document.getElementById("tekstA8");
          const tekstA10 = document.getElementById("tekstA10");
          const naslovA11 = document.getElementById('naslovA11');
          const naslovA12 = document.getElementById('naslovA12');
          const naslovA13 = document.getElementById('naslovA13');
          const naslovA14 = document.getElementById('naslovA14');
          const naslovA15 = document.getElementById('naslovA15');
    
            if (pozadinaA1)  {
              pozadinaA1.style.backgroundColor = "white";
              pozadinaA2.style.backgroundColor = "white";
              pozadinaA3.style.backgroundColor = "white";
            }
    
            if(tekstA1) {
              tekstA1.style.color = "black";
              tekstA2.style.color = "black";
              tekstA3.style.color = "black";
              tekstA4.style.color = "black";
              tekstA5.style.color = "black";
              tekstA6.style.color = "black";
              tekstA7.style.color = "black";
              tekstA8.style.color = "black";
              tekstA10.style.color = "black";
            }
            if(naslovA11) {
              naslovA11.style.color = "black";
              naslovA12.style.color = "black";
              naslovA13.style.color = "black";
              naslovA14.style.color = "black";
              naslovA15.style.color = "black";
            }
          //HOME page
            document.body.style.background = "white";
          const naslovH1 = document.getElementById("tekstH1");
          const naslovH2 = document.getElementById("tekstH3");
          if (naslovH1) {
            naslovH1.style.color="black";
            naslovH2.style.color="black";
          }
    } 

    export const changeLettersYellow = () => {

      localStorage.setItem("letters", "yellow");

      //home
        //HOME page
        document.body.style.background = "black";
        const naslovH1 = document.getElementById("tekstH1");
        const naslovH2 = document.getElementById("tekstH3");
        if (naslovH1) {
          naslovH1.style.color="yellow";
          naslovH2.style.color="yellow";
        }

            //daltonism
        const pozadinaD = document.getElementById('sveD');
        const pozadinaNaslovaD = document.getElementById('naslovDB');
        if (pozadinaD) {
          pozadinaD.style.backgroundColor = "black";
          pozadinaNaslovaD.style.backgroundColor = "black"; }

          const tekstD1 = document.getElementById('tekstD1');
          const tekstD2 = document.getElementById('tekstD2');
          const tekstD3 = document.getElementById('tekstD3');
          const tekstD4 = document.getElementById('tekstD4');
          const tekstD5 = document.getElementById('tekstD5');
          const tekstD6 = document.getElementById('tekstD6');
          const tekstD7 = document.getElementById('tekstD7');
          const tekstD8 = document.getElementById('tekstD8');
          const tekstD9 = document.getElementById('tekstD9');
          const tekstD10 = document.getElementById('tekstD10');
          const tekstD11 = document.getElementById('tekstD11');
          const naslovDB = document.getElementById('naslovDB');
          const naslovD1 = document.getElementById('naslovD1');
          const naslovD2 = document.getElementById('naslovD2');
          const naslovD3 = document.getElementById('naslovD3');

          const pozadina = document.getElementById("colorChangingSection");

          if(pozadina) {
            pozadina.style.background = "#454746";
          }

          if (tekstD1) {
            tekstD1.style.color = "yellow";
            tekstD2.style.color = "yellow";
            tekstD3.style.color = "yellow";
            tekstD4.style.color = "yellow";
            tekstD5.style.color = "yellow";
            tekstD6.style.color = "yellow";
            tekstD7.style.color = "blue";
            tekstD8.style.color = "yellow";
            tekstD9.style.color = "yellow";
            tekstD10.style.color = "yellow";
            tekstD11.style.color = "blue";
            naslovDB.style.color = "yellow";
            naslovD1.style.color = "yellow";
            naslovD2.style.color = "yellow";
            naslovD3.style.color = "yellow";
          }

          //Zanimljivosti 
          const pozadinaZ1 = document.getElementById('sveZ1');
          const pozadinaZ2 = document.getElementById('sveZ2');
          const pozadinaZ3 = document.getElementById('sveZ3');
          
          const tekst1 = document.getElementById("tekst1");
          const tekst2 = document.getElementById("tekst2");
          const tekst3 = document.getElementById("tekst3");
          const tekst4 = document.getElementById("tekst4");
          const tekst5 = document.getElementById("tekst5");
          const tekst6 = document.getElementById("tekst6");
          const tekst7 = document.getElementById("tekst7");
          const tekst8 = document.getElementById("tekst8");
          const tekst9 = document.getElementById("tekst9");
          const tekst10 = document.getElementById("tekst10");
          const tekst11 = document.getElementById("tekst11");
          const tekst12 = document.getElementById("tekst12");

          const naslov11 = document.getElementById("naslov11");
          const naslov12 = document.getElementById("naslov12");
          const naslov13 = document.getElementById("naslov13");

          if (naslov11) {
            naslov11.style.color = "yellow";
            naslov12.style.color = "yellow";
            naslov13.style.color = "yellow";
          }
          if (pozadinaZ1)  {
            pozadinaZ1.style.backgroundColor = "black";
            pozadinaZ2.style.backgroundColor = "black";
            pozadinaZ3.style.backgroundColor = "black";
          }

          if (tekst1) {
            tekst1.style.color = "black";
            tekst2.style.color = "black";
            tekst3.style.color = "black";
            tekst4.style.color = "black";
            tekst5.style.color = "black";
            tekst6.style.color = "black";
            tekst7.style.color = "black";
            tekst8.style.color = "black";
            tekst9.style.color = "black";
            tekst10.style.color = "black";
            tekst11.style.color = "black";
            tekst12.style.color = "black";
          }

          //Kontakt
          const pozadinaK = document.getElementById('sveK');
          if (pozadinaK)  {
            pozadinaK.style.backgroundColor = "black";
          }

          const naslovK1 = document.getElementById("naslovK1");
          if (naslovK1) {
            naslovK1.style.color="yellow";
          }

          //O nama
          const pozadinaA1 = document.getElementById('sveA1');
          const pozadinaA2 = document.getElementById('sveA2');
          const pozadinaA3 = document.getElementById('sveA3');

          const tekstA1 = document.getElementById("tekstA1");
        const tekstA2 = document.getElementById("tekstA2");
        const tekstA3 = document.getElementById("tekstA3");
        const tekstA4 = document.getElementById("tekstA4");
        const tekstA5 = document.getElementById("tekstA5");
        const tekstA6 = document.getElementById("tekstA6");
        const tekstA7 = document.getElementById("tekstA7");
        const tekstA8 = document.getElementById("tekstA8");
        const tekstA10 = document.getElementById("tekstA10");
        const naslovA11 = document.getElementById('naslovA11');
        const naslovA12 = document.getElementById('naslovA12');
        const naslovA13 = document.getElementById('naslovA13');
        const naslovA14 = document.getElementById('naslovA14');
        const naslovA15 = document.getElementById('naslovA15');

        const naslovA1 = document.getElementById('naslovA1');
        const naslovA2 = document.getElementById('naslovA2');
        const naslovA3 = document.getElementById('naslovA3');
        const naslovA4 = document.getElementById('naslovA4');

          if (pozadinaA1)  {
            pozadinaA1.style.backgroundColor = "black";
            pozadinaA2.style.backgroundColor = "black";
            pozadinaA3.style.backgroundColor = "black";
          }

          if(tekstA1) {
            tekstA1.style.color = "yellow";
            tekstA2.style.color = "yellow";
            tekstA3.style.color = "yellow";
            tekstA4.style.color = "yellow";
            tekstA5.style.color = "yellow";
            tekstA6.style.color = "yellow";
            tekstA7.style.color = "black";
            tekstA8.style.color = "black";
            tekstA10.style.color = "yellow";
          }
          if(naslovA11) {
            naslovA11.style.color = "yellow";
            naslovA12.style.color = "yellow";
            naslovA13.style.color = "yellow";
            naslovA14.style.color = "black";
            naslovA15.style.color = "black";
          }
          if (naslovA1) {
            naslovA1.style.color = "yellow";
            naslovA2.style.color = "yellow";
            naslovA3.style.color = "yellow";
            naslovA4.style.color = "yellow";
          }

        
          
    }  
    
    //tema
    export const changeStyleYellow = () => {
    //console.log("you just clicked");
    localStorage.setItem("theme", "yellow");
  
    var div1 = document.getElementById('logoNavbarBcg');
    var div2 = document.getElementById('navbarBackground');
    var div3 = document.getElementById('footer1');
    var div4 = document.getElementById('footer2');
    var div5 = document.getElementById('footer3');
    var dugme = document.getElementById('introDugme');
    var dugme1 = document.getElementById("z-button1");
    var dugme2 = document.getElementById("z-button2");
    var dugme3 = document.getElementById("z-button3");
    var dugme4 = document.getElementById("z-button4");


    div1.style.backgroundColor = '#e37e23';
    div2.style.backgroundColor = '#eca839';
    div3.style.backgroundColor = '#e37e23';
    div4.style.backgroundColor = '#eca839';
    div5.style.backgroundColor = '#f4d255';

    if (dugme) {
    dugme.style.background = '#e37e23';
    dugme.style.boxShadow = '0px 5px 15px 3px rgba(227,126,35,255)';

    }
    if (dugme1) {
      dugme1.style.background = '#e37e23';
    dugme1.style.boxShadow = '0px 5px 15px 3px rgba(227,126,35,255)';
    
    dugme2.style.background = '#e37e23';
    dugme2.style.boxShadow = '0px 5px 15px 3px rgba(227,126,35,255)';

    dugme3.style.background = '#e37e23';
    dugme3.style.boxShadow = '0px 5px 15px 3px rgba(227,126,35,255)';
    
    dugme4.style.background = '#e37e23';
    dugme4.style.boxShadow = '0px 5px 15px 3px rgba(227,126,35,255)';
    }

    const underlines = document.querySelectorAll('.underline');

    underlines.forEach(u => {
      u.style.backgroundColor = '#eca839';
      
    });

   /* const headings = document.querySelectorAll('.main-heading');

      headings.forEach(h => {
        h.style.color = '#fef452';
        
      });*/

    };

    export const changeStyleBlue = () => {
     // console.log("you just clicked");
      localStorage.setItem("theme", "blue");

      var div1 = document.getElementById('logoNavbarBcg');
      var div2 = document.getElementById('navbarBackground');
      var div3 = document.getElementById('footer1');
      var div4 = document.getElementById('footer2');
      var div5 = document.getElementById('footer3');
      var dugme = document.getElementById('introDugme');

      var dugme1 = document.getElementById("z-button1");
      var dugme2 = document.getElementById("z-button2");
      var dugme3 = document.getElementById("z-button3");
      var dugme4 = document.getElementById("z-button4");

      div1.style.backgroundColor = '#4a91f2';
      div2.style.backgroundColor = '#62c1e5';
      div3.style.backgroundColor = '#4a91f2';
      div4.style.backgroundColor = '#62c1e5';
      div5.style.backgroundColor = '#a0d9ef';
      if (dugme) {
      dugme.style.background = '#4a91f2';
      dugme.style.boxShadow = '0px 5px 15px 3px  rgba(74,145,242,255)';
      }

      if (dugme1) {
        dugme1.style.background = '#4a91f2';
      dugme1.style.boxShadow = '0px 5px 15px 3px  rgba(74,145,242,255)';

      dugme2.style.background = '#4a91f2';
      dugme2.style.boxShadow = '0px 5px 15px 3px  rgba(74,145,242,255)';

      dugme3.style.background = '#4a91f2';
      dugme3.style.boxShadow = '0px 5px 15px 3px  rgba(74,145,242,255)';

      dugme4.style.background = '#4a91f2';
      dugme4.style.boxShadow = '0px 5px 15px 3px  rgba(74,145,242,255)';
      }

      const underlines = document.querySelectorAll('.underline');

      underlines.forEach(u => {
        u.style.backgroundColor = '#4a91f2';
        
      });

     
/*
      const headings = document.querySelectorAll('.main-heading');

      headings.forEach(h => {
        h.style.color = '#62c1e5';
        
      });*/

    };

    export const changeStyleGreen = () => {
      //console.log("you just clicked");
      localStorage.setItem("theme", "green");
    
      var div1 = document.getElementById('logoNavbarBcg');
      var div2 = document.getElementById('navbarBackground');
      var div3 = document.getElementById('footer1');
      var div4 = document.getElementById('footer2');
      var div5 = document.getElementById('footer3');
      var dugme = document.getElementById('introDugme');

      var dugme1 = document.getElementById("z-button1");
      var dugme2 = document.getElementById("z-button2");
      var dugme3 = document.getElementById("z-button3");
      var dugme4 = document.getElementById("z-button4");

      div1.style.backgroundColor = '#6ba32d';
      div2.style.backgroundColor = '#547a1d';
      div3.style.backgroundColor = '#6ba32d';
      div4.style.backgroundColor = '#547a1d';
      div5.style.backgroundColor = '#96cc39';
      if (dugme) {
        dugme.style.background = '#6ba32d';
        dugme.style.boxShadow = '0px 5px 15px 3px  rgba(107,163,45,255)';
      }

      if (dugme1) {
        dugme1.style.background = '#6ba32d';
        dugme1.style.boxShadow = '0px 5px 15px 3px  rgba(107,163,45,255)';

        dugme2.style.background = '#6ba32d';
        dugme2.style.boxShadow = '0px 5px 15px 3px  rgba(107,163,45,255)';

        dugme3.style.background = '#6ba32d';
        dugme3.style.boxShadow = '0px 5px 15px 3px  rgba(107,163,45,255)';

        dugme4.style.background = '#6ba32d';
        dugme4.style.boxShadow = '0px 5px 15px 3px  rgba(107,163,45,255)';
      }

      const underlines = document.querySelectorAll('.underline');

      underlines.forEach(u => {
        u.style.backgroundColor = '#6ba32d';
        
      });
/*
      const headings = document.querySelectorAll('.main-heading');

      headings.forEach(h => {
        h.style.color = '#547a1d';
        
      });*/
      
    };

    //fontovi
    export const azurirajSveNaslove = (broj) => {
            
        const naslov11 = document.getElementById('naslov11');
        const naslov12 = document.getElementById('naslov12');
        const naslov13 = document.getElementById('naslov13');
        
        const naslovh1 = document.getElementById('homeh1');
        const naslovh2 = document.getElementById('homeh2');

        const naslovA1 = document.getElementById('naslovA1');
        const naslovA2 = document.getElementById('naslovA2');
        const naslovA3 = document.getElementById('naslovA3');
        const naslovA4 = document.getElementById('naslovA4');

        const naslovD1 = document.getElementById('naslovD1');
        const naslovD2 = document.getElementById('naslovD2');
        const naslovD3 = document.getElementById('naslovD3');

        const naslovK1 = document.getElementById('naslovK1');

        if (naslov11) {
        naslov11.style.fontSize = broj+"px";
        naslov12.style.fontSize = broj+"px";
        naslov13.style.fontSize = broj+"px";

         }

         if (naslovh1) {
           naslovh1.style.fontSize = broj+"px";
           naslovh2.style.fontSize = broj+"px";
         }

         if (naslovA1) {
          naslovA1.style.fontSize = broj+"px";
          naslovA2.style.fontSize = broj+"px";
          naslovA3.style.fontSize = broj+"px";
          naslovA4.style.fontSize = broj+"px";
         }

         if (naslovD1) {
          naslovD1.style.fontSize = broj+"px";
          naslovD2.style.fontSize = broj+"px";
          naslovD3.style.fontSize = broj+"px";
         }

         if (naslovK1) {
          naslovK1.style.fontSize = broj+"px";
         }
    }

    export const azurirajSveNaslove2 = (broj) => {
        
      const naslov21 = document.getElementById('naslov21');
      const naslov22 = document.getElementById('naslov22');
      const naslov23 = document.getElementById('naslov23');
      const naslov24 = document.getElementById('naslov24');
      const naslov25 = document.getElementById('naslov25');
      const naslov26 = document.getElementById('naslov26');
      const naslov27 = document.getElementById('naslov27');
      const naslov28 = document.getElementById('naslov28');
      const naslov29 = document.getElementById('naslov29');
      const naslov210 = document.getElementById('naslov210');
      const naslov211 = document.getElementById('naslov211');
      const naslov212 = document.getElementById('naslov212');

      const naslovA11 = document.getElementById('naslovA11');
      const naslovA12 = document.getElementById('naslovA12');
      const naslovA13 = document.getElementById('naslovA13');
      const naslovA14 = document.getElementById('naslovA14');
      const naslovA15 = document.getElementById('naslovA15');

      const naslovK11 = document.getElementById('naslovK11');
      const naslovK12 = document.getElementById('naslovK12');
      const naslovK13 = document.getElementById('naslovK13');

      if (naslov21) {
      naslov21.style.fontSize = broj+"px";
      naslov22.style.fontSize = broj+"px";
      naslov23.style.fontSize = broj+"px";
      naslov24.style.fontSize = broj+"px";
      naslov25.style.fontSize = broj+"px";
      naslov26.style.fontSize = broj+"px";
      naslov27.style.fontSize = broj+"px";
      naslov28.style.fontSize = broj+"px";
      naslov29.style.fontSize = broj+"px";
      naslov210.style.fontSize = broj+"px";
      naslov211.style.fontSize = broj+"px";
      naslov212.style.fontSize = broj+"px";
      

       }

       if (naslovA11) {
        naslovA11.style.fontSize = broj+"px";
        naslovA12.style.fontSize = broj+"px";
        naslovA13.style.fontSize = broj+"px";
        naslovA14.style.fontSize = broj+"px";
        naslovA15.style.fontSize = broj+"px";
       }

       if (naslovK11) {
        naslovK11.style.fontSize = broj+"px";
        naslovK12.style.fontSize = broj+"px";
        naslovK13.style.fontSize = broj+"px";
       }
    }

   export const azurirajSveNasloveB = (broj) => {

        
    const naslovDB = document.getElementById('naslovDB');
    const naslovH1 = document.getElementById("tekstH1");
  
    if (naslovH1) {
      naslovH1.style.fontSize = broj+"px";
      console.log("naslov Sajra");
    }
    
    if (naslovDB) {
      naslovDB.style.fontSize = broj+"px";
    }

    }

    export const azurirajSveTekstove = (broj) => {
    
      const tekst1 = document.getElementById("tekst1");
      const tekst2 = document.getElementById("tekst2");
      const tekst3 = document.getElementById("tekst3");
      const tekst4 = document.getElementById("tekst4");
      const tekst5 = document.getElementById("tekst5");
      const tekst6 = document.getElementById("tekst6");
      const tekst7 = document.getElementById("tekst7");
      const tekst8 = document.getElementById("tekst8");
      const tekst9 = document.getElementById("tekst9");
      const tekst10 = document.getElementById("tekst10");
      const tekst11 = document.getElementById("tekst11");
      const tekst12 = document.getElementById("tekst12");
      

      const tekstA1 = document.getElementById("tekstA1");
      const tekstA2 = document.getElementById("tekstA2");
      const tekstA3 = document.getElementById("tekstA3");
      const tekstA4 = document.getElementById("tekstA4");
      const tekstA5 = document.getElementById("tekstA5");
      const tekstA6 = document.getElementById("tekstA6");
      const tekstA7 = document.getElementById("tekstA7");
      const tekstA8 = document.getElementById("tekstA8");
      const tekstA10 = document.getElementById("tekstA10");


      const tekstD1 = document.getElementById('tekstD1');
      const tekstD2 = document.getElementById('tekstD2');
      const tekstD3 = document.getElementById('tekstD3');
      const tekstD4 = document.getElementById('tekstD4');
      const tekstD5 = document.getElementById('tekstD5');
      const tekstD6 = document.getElementById('tekstD6');
      const tekstD7 = document.getElementById('tekstD7');
      const tekstD8 = document.getElementById('tekstD8');
      const tekstD9 = document.getElementById('tekstD9');
      const tekstD10 = document.getElementById('tekstD10');
      const tekstD11 = document.getElementById('tekstD11');


      const tekstK1 = document.getElementById('tekstK1');
      const tekstK2 = document.getElementById('tekstK2');
      const tekstK3 = document.getElementById('tekstK3');

      const tekstH3 = document.getElementById("tekstH3");

      //console.log("tekst1 + ", broj);
      if (tekst1) {
      tekst1.style.fontSize = broj+"px";
      tekst2.style.fontSize = broj+"px";
      tekst3.style.fontSize = broj+"px";
      tekst4.style.fontSize = broj+"px";
      tekst5.style.fontSize = broj+"px";
      tekst6.style.fontSize = broj+"px";
      tekst7.style.fontSize = broj+"px";
      tekst8.style.fontSize = broj+"px";
      tekst9.style.fontSize = broj+"px";
      tekst10.style.fontSize = broj+"px";
      tekst11.style.fontSize = broj+"px";
      tekst12.style.fontSize = broj+"px";
      }
if (tekstA1) {
      tekstA1.style.fontSize = broj+"px";
      tekstA2.style.fontSize = broj+"px";
      tekstA3.style.fontSize = broj+"px";
      tekstA4.style.fontSize = broj+"px";
      tekstA5.style.fontSize = broj+"px";
      tekstA6.style.fontSize = broj+"px";
      tekstA7.style.fontSize = broj+"px";
      tekstA8.style.fontSize = broj+"px";
      tekstA10.style.fontSize = broj+"px";

      //console.log("t + ", tekstA1.style.fontSize);
   }

   if (tekstD1) {
    tekstD1.style.fontSize = broj+"px";
    tekstD2.style.fontSize = broj+"px";
    tekstD3.style.fontSize = broj+"px";
    tekstD4.style.fontSize = broj+"px";
    tekstD5.style.fontSize = broj+"px";
    tekstD6.style.fontSize = broj+"px";
    tekstD7.style.fontSize = broj+"px";
    tekstD8.style.fontSize = broj+"px";
    tekstD9.style.fontSize = broj+"px";
    tekstD10.style.fontSize = broj+"px";
    tekstD11.style.fontSize = broj+"px";
   }

   if (tekstK1) {
     tekstK1.style.fontSize = broj+"px";
     tekstK2.style.fontSize = broj+"px";
     tekstK3.style.fontSize = broj+"px";
   }

   if (tekstH3) {
      tekstH3.style.fontSize = broj+"px";
   }
    }

    export const azurirajSveNasloveH2 = (broj) => {
      const naslovH2 = document.getElementById("tekstH2");
      if (naslovH2) {
        naslovH2.style.fontSize = broj+"px";
      }
    }