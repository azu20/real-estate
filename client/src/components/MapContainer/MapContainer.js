import React, { Component, useState } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "./MapContainer.css"
import "leaflet/dist/leaflet.css"

const MapContainer = (props) => {

    const [center] = useState([39.7392, -104.9903])

    return (
        <div className="mapDiv">

            <Map
                center={center}
                zoom={13}
                style={{ width: '550px', height: '500px' }}
            >
                <TileLayer
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                // maxZoom={18}
                // id= "mapbox/streets-v11"
                // tileSize={420}
                // zoomOffset={-1}

                />
                {/* {props.properties.map(property => {
                    var location = `${[property.address.lat]},${[property.address.lon]}`

                    return (
                        <Marker position={location} key={property.property_id}>
                            <Popup>
                                <span>Address: {property.address.line}, {property.address.city} - {property.address.postal_code}</span>
                                <br />
                                <span>Price: {property.price}</span>
                            </Popup>
                        </Marker>
                    )
                })} */}

            </Map>
        </div>
    )
}

export default MapContainer


