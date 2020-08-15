import React, { Component } from "react";
import Nav from "../../components/Nav/Nav";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import "./Favorites.css";
import API from "../../utils/API";
import { MDBRow, MDBCol, MDBContainer } from 'mdbreact';
import dummyPhoto from "../../Assets/three-houses.jpg";
import Contact from "../../components/Contact/Contact";


class Favorites extends Component {

    constructor(props) {
        super(props)
        this.state = {
            result: [],
          
           };
    };

    // Loader
    loadProperties() {
        console.log("Test");
        API.getProperties()
            .then(payloadFromApiCall => {
                const theProperties = payloadFromApiCall.data;
                // console.log("the top x properties", theProperties);
                let sortedData = []
                for (let i=0; i<theProperties.length; i++){

               
                    if(theProperties[i].email === this.props.user_email){
                        //console.log("return true" +data.data[i].email)
                        //console.log("this is the sorted list")
                        //console.log(theProperties[i])
                        sortedData.push(theProperties[i])
                    }
                }

                
                this.setState({ result: sortedData })
                console.log("this is sorted data: ", sortedData )
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
                    <h2 class="display-4 text-center">Welcome Washburn Real Estate {this.props.user_email} We are excited to be working with you!</h2>
                    {/* <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
                    <hr class="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a> */}
                </div>


                <MDBContainer fluid>
                    <MDBRow>
                        <MDBCol size="6">
                            <MDBRow>
                            {this.state.result.map(property => (
                                    <MDBCol>

                                        <CardHomeInfo
                                            address={property.address}
                                            city={property.city}
                                            state={property.state}
                                            zip={property.zipcode}
                                            price={property.listPrice}
                                            src={property.image}
                                            bedrooms={property.bedroom}
                                            bathrooms={property.bathroom}
                                            email={property.email}
                                            property_id={property.property_id}
                                            // sqft={property.building_size.size}
                                        />
                                    </MDBCol>
                                ))}
                            </MDBRow>
                        </MDBCol>
                        <MDBCol size="6">
                            <Contact />
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
                
            </>
        );
    }
}

export default Favorites; 