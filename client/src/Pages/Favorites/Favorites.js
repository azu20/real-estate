import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import "./Favorites.css";
import API from "../../utils/API";
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
class Favorites extends Component {
    state = {
        result: []
    }
    // Loader
    loadProperties() {
        console.log("Test");
        API.getProperties()
            .then(payloadFromApiCall => {
                const theProperties = payloadFromApiCall.data;
                console.log("the top x properties", theProperties);
                let cardData = [];
                for (let oneProperty of theProperties) {
                    cardData.push({ name: oneProperty.address, listprice: oneProperty.listPrice, image: oneProperty.Image });
                }
                this.setState({result: cardData})
                console.log("this is card data: ", cardData)
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.loadProperties();
    }

    render() {
        return (
        <>
            <Nav />
            <div className="divColor">
                This is the FAVORITES AREA
            </div>
            {this.state.result.map(property => (
                <MDBCol  md="6">

                    <CardHomeInfo
                        address={property.address}
                        price={property.listPrice}
                        image={property.image}
                        bedrooms={property.bedroom}
                        bathrooms={property.bathroom}
                    // sqft={property.building_size}
                    />
                </MDBCol>
            ))}
            </>
                );
    }
}

export default Favorites; 