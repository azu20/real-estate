import React, { Component } from "react";
import SearchForm from "../../components/searchform/SearchForm.js";
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../../components/Nav/Nav";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import MapContainer from "../../components/MapContainer/MapContainer";
import TestAPIData from "../../Assets/Test_JSON_files/testHomeData.json";
import "./Main.css";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { withAuthenticationRequired } from '@auth0/auth0-react';
import Contact from "../../components/Contact/Contact";
// import API from "../../utils/API";



class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            result: [],
            search: "Denver",
           };
        // here is the email props information
        console.log("what is this?"+(props.user.email));
      }


    componentDidMount() {
        this.searchHouses("Denver, CO");

    }

    searchHouses = (query) => {
 
        this.setState({result: TestAPIData.properties})
  
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
                        {/* hide on screens smaller than lg */}
                        <MDBCol className="d-none d-lg-block" lg="8" xl="6">  
                            <MapContainer properties={this.state.result} />
                            <br></br>
                            <Contact />
                        </MDBCol>
                        <MDBCol  lg="4" xl="6">
                            <MDBRow className="align-items-center">
                                {this.state.result.map(property => (
                                    <MDBCol>

                                        <CardHomeInfo
                                            address={property.address.line}
                                            price={property.price}
                                            src={property.thumbnail}
                                            bedrooms={property.beds}
                                            bathrooms={property.baths}
                                            email={this.props.user.email}
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
