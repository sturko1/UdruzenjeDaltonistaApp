import React from "react";
import firstSlide from "../Images/firstSlide3.png";
import secondSlide from "../Images/carouselSecond.png";
import thirdSlide from "../Images/carouselThird.png"

const Carousel = () => {
    return (

        <section id = "sve" className="section" style={{ backgroundColor: 'lightgrey' }}>
        
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3 className="main-heading" id = "homeh1">Dobrodošli na službenu stranicu Udruženja osoba s daltonizmom BiH!</h3>
                    <h4 className="main-heading" id = "homeh2">Za početak izaberite sebi najbolju boju pozadine i slova </h4>
                    <div className="underline mx-auto"> </div>
                    

        <div className="carousel-wrapper">
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                       
                        
                        <img className="d-block w-100" src={firstSlide} alt="First slide"/>

                    </div>
                        <div className="carousel-item">
                        <img className="d-block w-100" src={secondSlide} alt="Second slide"/>
    </div>
                <div className="carousel-item">
                                    <img className="d-block w-100" src={thirdSlide} alt="Third slide"/>
                </div>
                 
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Prethodna</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Sljedeća</span>
                            </a>
                        </div>
        </div>
        
        </div>
            </div>
    
    </section>
    )
}

export default Carousel