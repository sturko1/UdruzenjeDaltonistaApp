import React from "react"
import '../Styles/Footer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";


const MissionVission = () => {
    return (
    <>
        {/*Our vision, mission and values*/ }
        <section className = "section bg-c-light border-top" >
            <div className="container">
                <div className="row">
                    <div className="col-md-12 mb-4 text-center">
                        <h3 className="main-heading"> Vizija Misija i Vrijednosti</h3>
                        <div className="underline mx-auto"></div>
                    </div>

                    <div className="col-md-4 text-center">
                        <h6> Nasa vizija </h6>
                        <p>bhausiodlkxmnbshduiolKMNABSDGHUIOSAL,MSNDBCDGHUSIOALSMCNVBHDUSIOA</p>
                    </div>

                    <div className="col-md-4 text-center">
                        <h6> Nasa misija </h6>
                        <p>bhausiodlkxmnbshduiolKMNABSDGHUIOSAL,MSNDBCDGHUSIOALSMCNVBHDUSIOA</p>
                    </div>

                    <div className="col-md-4 text-center">
                        <h6> Nase vrijednosti </h6>
                        <p>bhausiodlkxmnbshduiolKMNABSDGHUIOSAL,MSNDBCDGHUSIOALSMCNVBHDUSIOA</p>
                    </div>
                </div>
            </div>
            </section >
        </>
    );
}

export default MissionVission;