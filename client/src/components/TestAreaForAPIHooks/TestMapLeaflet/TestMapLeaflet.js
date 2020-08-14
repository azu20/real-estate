import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import wash from "../../../Assets/WashburnSearch.png";
import "../TestCards/TestCards.css";

import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const TestMapLeaflet = (props) => {

    return (



        <>
            <Map center={[51.505, -0.09]}
                zoom={13}

            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
                />

            </Map>


        </>
    )
}

export default TestMapLeaflet;