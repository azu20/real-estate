import React, { useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol,MDBIcon } from 'mdbreact';

import "./MapContainer.css"
// import CardHomeInfo from "../CardHomeInfo/CardHomeInfo"
// import "leaflet/dist/leaflet.css"

const MapContainer = (props) => {

    // const [center] = useState([39.7392, -104.9903])
    
    const position = props.properties[0];
    console.log(position);
    
    
    

    return (

        <Map
            center={[39.7392, -104.9903]}
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
                    <Marker  position={[property.address.lat, property.address.lon]} key={property.property_id}>
                        <Popup style={{ height: "15rem", width: "15rem" }}>
                            <MDBCol className="popupCont">
                                <MDBCard className="text-center ml-1 pb-3" style={{ height: "15rem", width: "15rem" }}>
                                    <MDBCardImage className="img-fluid" src={property.thumbnail} waves />
                                    <MDBCardBody>
                                    <MDBIcon className="heartIconPosition" size="2x" far icon="heart" />
                                        <MDBCardTitle className="popupTitle">{property.address.line}</MDBCardTitle>
                                        <MDBCardText className="">
                                            Price:  ${property.price}
                                            <br></br>
                                            Beds: {property.beds} 
                                            <br></br>

                                            Baths: {property.baths}
                                            <br></br>

                                        </MDBCardText>
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


