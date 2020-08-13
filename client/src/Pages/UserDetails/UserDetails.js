import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MDBJumbotron, MDBContainer, MDBCol, MDBRow, MDBBtn } from "mdbreact";
import API from "../../utils/API";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import Nav from "../../components/Nav/Nav";



function UserDetails(props) {
    const [user, setUser] = useState({})
    const [property, setProperties] = useState([]);

    useEffect(() => {
        loadProperties();
        loadUser();
    }, []);
    // When this component mounts, grab the book with the _id of props.match.params.id
    // e.g. localhost:3000/books/599dcb67f0f16317844583fc

    function loadProperties() {
        console.log("Test property function");
        API.getTopProperties(3)
            .then(payloadFromApiCall => {
                const theProperties = payloadFromApiCall.data;
                console.log("the top x properties", theProperties);
                setProperties(theProperties);
            })
            .catch(err => console.log(err));
    };

    const {id} = useParams()
    // useEffect(() => {
    //     API.getUser(id)
    //       .then(res => setUser(res.data))
    //       .catch(err => console.log(err));
    //       console.log("Test user function");
    //   }, [])
    
    // function loadUser() {
    //     console.log("Test user function");
    //     API.getUser(user._id)
    //         .then(res => setUser(res.data))
    //         .catch(err => console.log(err));
    // }
    function loadUser(id) {
        console.log("Test User function");
        API.getUser(id)
        .then(payloadFromApiCall => {
                const theUser = payloadFromApiCall.data;
                console.log("the top x users", theUser);
                setUser(theUser);
           }
        )
        .catch(err => console.log(err));
    };


    return (
      <>
      <MDBContainer>
            <Nav />
            <MDBJumbotron fluid>
                    <h2 className="display-4">Fluid jumbotron   {user.firstName} {user.lastName}</h2>
                    <p className="lead">This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                        <p>Email:{user.email}</p>
                        <p>Phone:{user.phone}</p>
                        <p>registration date:{user.registrationDate}</p>
                        <p>last login:{user.lastLogin}</p>
                    <MDBBtn color="primary">Learn More
                        <Link to="/adminarea">← Back to Admin Page</Link>
                    </MDBBtn>
            </MDBJumbotron>
                <MDBRow className="align-items-center">

                    <MDBCol md="6">

                        <CardHomeInfo
                            address={property.address}
                            price={property.listPrice}
                            src={property.image}
                            bedrooms={property.bedrooms}
                            bathrooms={property.bathrooms}
                            sqft={property.propSqFeet}
                        />
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
</>
  )
}

export default UserDetails;