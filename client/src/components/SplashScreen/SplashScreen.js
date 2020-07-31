import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import {Link} from "react-router-dom";
import "./SplashScreen.css";



const SplashScreen = () => {
    return (
      <>
      <MDBCol md="6" className="jumboTron">
        <div className="active-pink-3 active-pink-4 mb-4">
          <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
          <Link to="/mapandcard"><button>Search</button></Link>
        </div>
      </MDBCol>
      
  
     
      </>
    )
  }
  
  export default SplashScreen;