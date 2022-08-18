import React from "react"
import '../Styles/Footer.css';
import { BsFacebook,BsTwitter, BsInstagram } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer-dark" id="footer1">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-md-3 item">
                            <h3>KORISNI LINKOVI</h3>
                            <ul>
                                <li><Link to="/">Početna</Link></li>
                                <li><Link to="/daltonism">Daltonizam</Link></li>
                                <li><Link to="/zanimljivosti">Zanimljivosti</Link></li>
                                
                            </ul>
                        </div>
                        <div className="col-sm-6 col-md-3 item">
                            <h3>INFORMACIJE</h3>
                            <ul>
                                <li><Link to="/aboutus">O nama</Link></li>
                                <li><Link to="/contact">Kontakt</Link></li>
                                
                            </ul>
                        </div>
                        <div className="col-md-6 item text">
                            <h3>Udruzenje osoba s daltonizmom BiH</h3>
                            <p> Službena stranica Udruženja osoba s daltonizmom Bosne i Hercegovine.</p> 
                        </div>
                        <div className="col item social">
                            <a href="#"><BsFacebook /></a>
                            <a href="#"><BsTwitter /></a>
                            <a href="#"><BsInstagram/></a></div>



                    </div>
                    <p className="copyright">&copy;{new Date().getFullYear()} Udruzenje osoba s daltonizmom BiH - All Rights Reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Footer