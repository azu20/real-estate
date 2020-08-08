import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';

import "./MapContainer.css"
// import CardHomeInfo from "../CardHomeInfo/CardHomeInfo"
// import "leaflet/dist/leaflet.css"

const MapContainer = (props) => {

    const [center] = useState([39.7392, -104.9903])

    return (


        <Map
            center={center}
            zoom={13}
            style={{ width: '100%', height: '500px' }}
        >
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            // maxZoom={18}
            // id= "mapbox/streets-v11"
            // tileSize={420}
            // zoomOffset={-1}

            />
            {props.properties.map(property => {

                return (
                    <Marker position={[property.address.lat, property.address.lon]} key={property.property_id}>
                        <Popup>
                            <MDBCol className="popupCont">
                                <MDBCard style={{ height: "15rem", width: "15rem" }}>
                                    <MDBCardImage className="img-fluid" src={property.thumbnail} waves />
                                    <MDBCardBody>
                                        <MDBCardTitle className="popupTitle">{property.address.line}</MDBCardTitle>
                                        <MDBCardText>
                                            Price:  ${property.price} Beds: {property.beds} Baths: {property.baths}
                                        </MDBCardText>
                                        <MDBBtn className="popUpButton" href="#">Save to Favorites</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                            </MDBCol>
                        </Popup>
                    </Marker>

                )
            })}

        </Map>

    )
}

export default MapContainer


