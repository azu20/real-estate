import React from "react"
import {Link} from "react-router-dom";
// import "./MapAndCardDispay.css";
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../Nav/Nav";
// import NavSubNav from "../NavSubNav/NavSubNav";
import CardHomeInfo from "../CardHomeInfo/CardHomeInfo";
import LogoutButton from "../LogoutButton/LogoutButton";
import { withAuthenticationRequired } from '@auth0/auth0-react';


const MapAndCardDispay = () => {
    return (
        <>
            <Nav></Nav>
            <LogoutButton />
            <NavSubNav></NavSubNav>

            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol size="6" className="areaForMap">
                       MAP AREA

                </MDBCol>
                    <MDBCol size="6">
                        <CardHomeInfo></CardHomeInfo>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                </MDBRow>
            </MDBContainer>


        </>
    )
}

// export default MapAndCardDispay;

export default withAuthenticationRequired(MapAndCardDispay, {
    // Show a message while the user waits to be redirected to the login page.
    onRedirecting: () => (<div>Redirecting you to the login page...</div>)
  });