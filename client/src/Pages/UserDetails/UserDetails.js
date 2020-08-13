import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MDBJumbotron, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBMedia } from "mdbreact";
import API from "../../utils/API";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import Nav from "../../components/Nav/Nav";
import "./UserDetails.css";

function UserDetails() {
    const [user, setUser] = useState({})
    const { id } = useParams()

    useEffect(() => {
        API.getUser(id)
            .then(res => setUser(res.data))
            .catch(err => console.log(err));
        console.log("calling", setUser);

    }, [])

    return (
        <>
            <Nav />

            {/* <MDBContainer> */}
            <MDBRow className="d-flex" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`, padding: 60 }}>
                <MDBJumbotron fluid className="mt-5 text-center" style={{ width: "75rem", margin: "auto", padding: "auto" }}>
                    <h2 className="display-4 font-weight-bold text-center">Name:{user.firstName} {user.lastName}</h2>
                    <p>This is a modified jumbotron that occupies the entire horizontal space of its parent.</p>
                    <p>Email:{user.email}</p>
                    <p>Phone:{user.phone}</p>
                    <p>registration date:{user.registrationDate}</p>
                    <p>last login:{user.lastLogin}</p>
                    <MDBBtn outline color="primary" className="waves-effect" href="/adminarea" >
                        ← Back to Admin Page
                    </MDBBtn>
                </MDBJumbotron>
            </MDBRow>
            {/* </MDBContainer> */}

            {/* <MDBContainer fluid>
            <MDBRow className="d-flex">
                <MDBCol md="6" className="align-items-center">
                        <CardHomeInfo
                            address={user.phone}
                            price={user.phone}
                            // src={user.phone}
                            // bedrooms={user.phone}
                            // bathrooms={user.phone}
                            // sqft={user.phone}
                        />
                </MDBCol>
            </MDBRow>
            </MDBContainer> */}
            <MDBRow>
            <MDBMedia list style={{ margin: "auto"}}  className="mt-3"> 
                <MDBMedia tag="li">
                    <MDBMedia left href="#">
                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder7.jpg" alt="Generic placeholder image" />
                    </MDBMedia>
                    <MDBMedia body>
                        <MDBMedia heading>
                            List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          </MDBMedia>
                </MDBMedia>
                <MDBMedia tag="li">
                    <MDBMedia left href="#">
                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg" alt="Generic placeholder image" />
                    </MDBMedia>
                    <MDBMedia body>
                        <MDBMedia heading>
                            List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </MDBMedia>
                </MDBMedia>
                <MDBMedia tag="li">
                    <MDBMedia left href="#">
                        <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg" alt="Generic placeholder image" />
                    </MDBMedia>
                    <MDBMedia body>
                        <MDBMedia heading>
                            List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
        </MDBMedia>
                </MDBMedia>
            </MDBMedia>
            </MDBRow>
        </>
    );
}

export default UserDetails;