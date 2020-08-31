import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { MDBJumbotron, MDBContainer, MDBCol, MDBRow, MDBBtn, MDBCardTitle, MDBCard, MDBCardImage, MDBCardBody, MDBIcon, MDBCardText } from "mdbreact";
import API from "../../utils/API";
import CardHomeInfo from "../../components/CardHomeInfo/CardHomeInfo";
import Nav from "../../components/Nav/Nav";
import "./UserDetails.css";
import Favorites from "../Favorites/Favorites";
import UserFavorite from "../../components/UserFavorite/UserFavorite"

function UserDetails() {
    const [user, setUser] = useState({})
    const [preferences, setUserPreferences] = useState({})
    const [favorites, setUserFavoritesProperties] = useState([{}])
    const { id } = useParams()
    let favoriteHouse1 = []


    useEffect(() => {
        API.getUser(id)
            .then(res => {
                const userData = res.data;
                setUser(userData);
                setUserPreferences(userData.preferences);
                setUserFavoritesProperties(userData.favoriteProperties);
                // favoriteHouses.push(userData.favoriteProperties)
                console.log("userdata ", userData);
                console.log("preferences ", userData.preferences);
                console.log("favorites ", userData.favoriteProperties);
                // console.log(favoriteHouses);

            })
            .catch(err => console.log(err));

    }, [])




    return (
        <>
            <Nav />

            <MDBContainer>
                <MDBRow className="d-flex" style={{ backgroundImage: `url(https://img.freepik.com/free-vector/dark-low-poly-background_1048-7971.jpg?size=626&ext=jpg)`, padding: 60 }}>
                    <MDBJumbotron fluid className="mt-2 text-center" style={{ width: "75rem", margin: "auto", padding: "auto" }}>
                        <h4 className="display-4 font-weight-bold text-center">{user.firstName} {user.lastName}</h4>
                        <p>Email: {user.email}</p>
                        <p>Phone Contact: {user.phone}</p>
                        <p>Bedrooms: {preferences.bedrooms}</p>
                        <p>Bathrooms: {preferences.bathrooms}</p>
                        <p>Price Range: $ {preferences.priceRange ? preferences.priceRange.from : "?"} - $ {preferences.priceRange ? preferences.priceRange.to : "?"}</p>
                        <hr className="my-2" />
                        <p>Registration date: {user.registrationDate}</p>
                        <p>Last Login: {user.lastLogin}</p>
                        <MDBBtn color="elegant" className="waves-effect" href="/adminarea" >
                            ← Back to Admin Page
                            </MDBBtn>
                    </MDBJumbotron>
                </MDBRow>
            </MDBContainer>
            <MDBContainer>
                <MDBRow>
                    <div>
                    <MDBCol className="d-flex">
                        {favorites.map(x => (

                            
                                <MDBCard style={{ width: "22rem" }}>
                                    <MDBCardImage className="img-fluid" src={x.propertyImage} waves />
                                    <MDBCardBody>
                                        <MDBCardTitle><h2>{x.propertyAddress}</h2></MDBCardTitle>
                                        <MDBCardText> Price: ${x.listPrice}</MDBCardText>
                                        <MDBCardText> Bedrooms: ${x.bedrooms}</MDBCardText>
                                        <MDBCardText> Bathrooms: ${x.bathrooms}</MDBCardText>

                                        <MDBBtn color="elegant" className="align-center" href="#">Schedule Showing</MDBBtn>
                                    </MDBCardBody>
                                </MDBCard>
                           

                        ))}
                         </MDBCol>
                    </div>
                </MDBRow>
            </MDBContainer>
        </>
    )
}

export default UserDetails;