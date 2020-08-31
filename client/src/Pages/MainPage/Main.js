import React, { Component } from "react";
import SearchForm from "../../components/searchform/SearchForm.js";
import {MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import Nav from "../../components/Nav/Nav";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import MapContainer from "../../components/MapContainer/MapContainer"
import "./Main.css"
import Contact from "../../components/Contact/Contact";
import API from "../../utils/API";

class MainPage extends Component {
    constructor(props) {
        super(props);
       
        this.state = {
            user: props.user,
            result: [],
            search: "Mesa",    
            selectedBed: null,
            selectedBath:null,
            selectedMax:null,
            selectedMin:null,
            selectedSqFt:null          
           };
        console.log("the state of props",props);
        console.log("the state of MainPage",this.state);
    };

    componentDidMount() {
        this.searchHouses("Mesa, AZ");

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
        //this.setState({result: TestAPIData.properties}) 
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
                                            city={property.address.city}
                                            state={property.address.state}
                                            zip={property.address.postal_code}
                                            price={property.price}
                                            src={property.thumbnail}
                                            bedrooms={property.beds}
                                            bathrooms={property.baths}
                                            email={this.props.user.email}
                                            property_id={property.property_id}
                                            // sqft={property.building_size.size}
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
