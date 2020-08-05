import React from "react"
import {Link} from "react-router-dom";
import "../MapAndCardDispay/MapAndCardDispay.css";
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../Nav/Nav";
import NavSubNav from "../NavSubNav/NavSubNav";
import CardHomeInfo from "../CardHomeInfo/CardHomeInfo";
import LogoutButton from "../LogoutButton/LogoutButton";


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

export default MapAndCardDispay;