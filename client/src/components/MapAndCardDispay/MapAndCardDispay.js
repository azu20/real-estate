import React from "react"

import { Link } from "react-router-dom";
import "../MapAndCardDispay/MapAndCardDispay.css";

import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../Nav/Nav";
// import NavSubNav from "../NavSubNav/NavSubNav";
import CardHomeInfo from "../CardHomeInfo/CardHomeInfo";



const MapAndCardDispay = () => {
    return (
        <>
            <Nav></Nav>
            {/* <NavSubNav></NavSubNav> */}

            <MDBContainer fluid>
                <MDBRow>
                    <MDBCol size="" className="areaForMap">
                       

                    </MDBCol>
                    {/* <MDBCol size="">
                        <CardHomeInfo></CardHomeInfo>
                    </MDBCol> */}
                </MDBRow>
                <MDBRow>
                </MDBRow>
            </MDBContainer>


        </>
    )
}

export default MapAndCardDispay;