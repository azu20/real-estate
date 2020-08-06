import React, { Component } from "react";
import API from "../../../utils/API"
import SearchForm from "../../searchform/SearchForm.js";
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../../Nav/Nav";
import CardHomeInfo from "../../CardHomeInfo/CardHomeInfo";
import MapContainer from "../../MapContainer/MapContainer"


class MainPage extends Component {
    state = {
        result: [],
        search: "Denver"
    };

    componentDidMount() {
        this.searchHouses("Denver", "CO");

    }

    searchHouses = (query) => {
        let stateCodeArr = query.split(",");
        let stateCode = stateCodeArr[1];
        let city = stateCodeArr[0];
        API.search(city,stateCode)
            .then(data => this.setState({ result: data.data.properties }))
            .catch(err => console.log(err));
    };



    handleInputChange = event => {
        const value = event.target.value;
        const name = event.target.name;
        this.setState({
            [name]: value
        });
    };



    handleFormSubmit = event => {
        event.preventDefault();
        this.searchHouses(this.state.search);
    };

    render() {
        return (
            <>
                <Nav></Nav>

                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />

                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol size="6" className="">
                            <MapContainer properties={this.state.result} />

                        </MDBCol>
                        <MDBCol size="6">
                            <MDBRow>
                                {this.state.result.map(property => (
                                    <MDBCol size="6">

                                        <CardHomeInfo
                                            address={property.address.line}
                                            price={property.price}
                                            src={property.thumbnail}
                                            bedrooms={property.beds}
                                            bathrooms={property.baths}

                                        // sqft={property.building_size}
                                        />
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </MDBCol>
                    </MDBRow>

                </MDBContainer>


            </>
        );
    }
}




export default MainPage;


