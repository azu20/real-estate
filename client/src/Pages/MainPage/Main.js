import React, { Component } from "react";
import API from "../../utils/API"
import SearchForm from "../../components/searchform/SearchForm.js";
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../../components/Nav/Nav";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import MapContainer from "../../components/MapContainer/MapContainer"
import "./Main.css"
// import LogoutButton from "../../components/LogoutButton/LogoutButton";
// import { withAuthenticationRequired } from '@auth0/auth0-react';
import Contact from "../../components/Contact/Contact"



class MainPage extends Component {
    state = {
        result: [],
        search: "Denver",
        selectedBed: null,
        selectedBath:null,
        selectedMax:null,
        selectedMin:null,
        selectedSqFt:null

    };

    componentDidMount() {
        // this.searchHouses("Denver, CO");

    }

    searchHouses = (query) => {
        let stateCodeArr = query.split(", ");
        let stateCode = stateCodeArr[1];
        let city = stateCodeArr[0];
        let beds = this.state.selectedBed;
        let baths = this.state.selectedBath;
        let priceMin = this.state.selectedMin;
        let priceMax = this.state.selectedMax;
        let sqft = this.state.selectedSqFt;
        API.search(city,stateCode, beds, priceMin, baths, priceMax, sqft)
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
        let beds = this.state.selectedBed;
        let baths = this.state.selectedBath;
        let priceMin = this.state.selectedMin;
        let priceMax = this.state.selectedMax;
        let sqft = this.state.selectedSqFt;
        event.preventDefault();
        this.searchHouses(this.state.search,beds,priceMin,baths,priceMax,sqft);
    };

    render() {
        return (
            <>
                <Nav></Nav>

                       
                <SearchForm className="searchBox"
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                    
                />
                


                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol md="6" className="mapContainer">
                            <MapContainer properties={this.state.result} />
                            <br></br>
                            <Contact />

                        </MDBCol>
                        <MDBCol md="6">
                            <MDBRow className="align-items-center">
                                {this.state.result.map(property => (
                                    <MDBCol  md="6">

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

// export default withAuthenticationRequired(MainPage, {
//     // Show a message while the user waits to be redirected to the login page.
//     onRedirecting: () => (<div>Redirecting you to the login page...</div>)
//   });
