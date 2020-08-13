import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import "./Favorites.css";
import API from "../../utils/API";
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import dummyPhoto from "../../Assets/three-houses.jpg";

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
                this.setState({ result: cardData })
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
                <div class="jumbotron">
                    <h2 class="display-4">Hello, world!</h2>
                    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                </div>

                {this.state.result.map(property => (
                    <MDBCol md="6">

                        <CardHomeInfo
                            address={property.name}
                            price={property.listprice}
                            src={dummyPhoto}

                        // address={property.address.line}
                        // city={property.address.city}
                        // state={property.address.state}
                        // zip={property.address.postal_code}
                        // price={property.price}
                        // src={property.thumbnail}
                        // bedrooms={property.beds}
                        // bathrooms={property.baths}
                        // email={this.props.user.email}
                        // property_id={property.property_id}
                        // sqft={property.building_size.size}


                        />
                    </MDBCol>
                ))}
            </>
        );
    }
}

export default Favorites; 