import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MDBJumbotron, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBMedia } from "mdbreact";
import API from "../../utils/API";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import Nav from "../../components/Nav/Nav";
import "./UserDetails.css";

function UserDetails() {
    const [user, setUser] = useState({})
    const [preferences, setUserPreferences] = useState({})
    const [favorites, setUserFavoritesProperties] = useState({})
    const { id } = useParams()

    useEffect(() => {
        API.getUser(id)
            .then(res => {
                const userData = res.data;
                setUser(userData);
                setUserPreferences(userData.preferences);
                setUserFavoritesProperties(userData.favoriteProperties);
                console.log("userdata ", userData);
                console.log("preferences ",userData.preferences);
                console.log("favorites ",userData.favoriteProperties);
            })
            .catch(err => console.log(err));
    }, [])
    
    return (
        <>
            <Nav />

            {/* <MDBContainer> */}
            <MDBRow className="d-flex" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)`, padding: 60 }}>
                <MDBJumbotron fluid className="mt-5 text-center" style={{ width: "75rem", margin: "auto", padding: "auto" }}>
                    <h2 className="display-4 font-weight-bold text-center">{user.firstName} {user.lastName}</h2>
                    <p>Email: {user.email}</p>
                    <p>Phone Contact: {user.phone}</p>
                    <p>Bedrooms: {preferences.bedrooms}</p>
                    <p>Bathrooms: {preferences.bathrooms}</p>
                    <p>Price Range: $ { preferences.priceRange ? preferences.priceRange.from : "?"  } - $ { preferences.priceRange ? preferences.priceRange.to : "?"  }</p>
                    <hr className="my-2" />
                    <p>Registration date: {user.registrationDate}</p>
                    <p>Last Login: {user.lastLogin}</p>
                    <MDBBtn outline color="primary" className="waves-effect" href="/adminarea" >
                        ← Back to Admin Page
                    </MDBBtn>
                </MDBJumbotron>
            </MDBRow>
            <MDBRow>

                <MDBMedia list style={{ margin: "auto" }} className="mt-3">
                    <MDBMedia tag="li" key={user._id}>
                        <MDBMedia left href="#">
                            <MDBMedia object src={favorites.propertyImage ? favorites.propertyImage : "https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg"} alt="No picture available" />
                        </MDBMedia>
                        <MDBMedia body>

                            <MDBMedia heading>
                                <h3> { favorites.propertyAddress ? favorites.propertyAddress : "No favorites available"  } </h3>
                            </MDBMedia>
                            <p>Bedrooms:{ favorites.bedrooms ? favorites.bedrooms : "No bedrooms available"  }</p>
                            <p>Bathrooms:{ favorites.bathrooms ? favorites.bathrooms : "No bathrooms available"  }</p>
                            <hr className="my-2" />
                        </MDBMedia>
                    </MDBMedia>

                    {/* <MDBMedia tag="li">
                        <MDBMedia left href="#">
                            <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder6.jpg" alt="Generic placeholder image" />
                        </MDBMedia>
                        <MDBMedia body>
                            <MDBMedia heading>
                                List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <hr className="my-2" />
                        </MDBMedia>
                    </MDBMedia> */}
                    {/* <MDBMedia tag="li">
                        <MDBMedia left href="#">
                            <MDBMedia object src="https://mdbootstrap.com/img/Photos/Others/placeholder5.jpg" alt="Generic placeholder image" />
                        </MDBMedia>
                        <MDBMedia body>
                            <MDBMedia heading>
                                List-based media object
          </MDBMedia>
          Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
          <hr className="my-2" />
                        </MDBMedia>
                    </MDBMedia> */}
                </MDBMedia>
            </MDBRow>
        </>
    );
}

export default UserDetails;