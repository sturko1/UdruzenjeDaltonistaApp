import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light" id="navbarBackground">
            <div className="container">
                
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse justify-content-center" id="navbarText">
                  <ul className="navbar-nav ml-auto align-items-center">

                    <li className="nav-item active">
                        <Link className="nav-link" to="/">Home <span className="sr-only"></span></Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/aboutus">O nama</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/daltonism">Daltonizam</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/zanimljivosti">Zanimljivosti</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/contact">Kontakt</Link>
                    </li>


                </ul>
           
                </div>
            </div>
</nav>
        )
}

export default Navbar