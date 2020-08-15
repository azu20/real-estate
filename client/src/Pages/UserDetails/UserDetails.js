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
    const [favorites, setUserFavoritesProperties] = useState({})
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



    if (favorites.length > 0) {

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
                            <MDBBtn  color="elegant" className="waves-effect" href="/adminarea" >
                                ← Back to Admin Page
                            </MDBBtn>
                        </MDBJumbotron>
                    </MDBRow>
                </MDBContainer>
                <MDBContainer>
                <MDBRow>
                    <MDBCol className="p-3" size="4" >
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src={favorites[0].propertyImage} waves />
                            <MDBCardBody>
                                <MDBCardTitle><h2>{favorites[0].propertyAddress}</h2></MDBCardTitle>
                                <MDBCardText> Price: ${favorites[0].listPrice}</MDBCardText>
                                <MDBCardText> Bedrooms: ${favorites[0].bedrooms}</MDBCardText>
                                <MDBCardText> Bathrooms: ${favorites[0].bathrooms}</MDBCardText>

                                <MDBBtn color="elegant" className="align-center" href="#">Schedule Showing</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol className="p-3" size="4" >
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src={favorites[1].propertyImage} waves />
                            <MDBCardBody>
                                <MDBCardTitle><h2>{favorites[1].propertyAddress}</h2></MDBCardTitle>
                                <MDBCardText> Price: ${favorites[1].listPrice}</MDBCardText>
                                <MDBCardText> Bedrooms: ${favorites[1].bedrooms}</MDBCardText>
                                <MDBCardText> Bathrooms: ${favorites[1].bathrooms}</MDBCardText>

                                <MDBBtn color="elegant" className="text-center" href="#">Schedule Showing</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>

                    <MDBCol className="p-3" size="4" >
                        <MDBCard style={{ width: "22rem" }}>
                            <MDBCardImage className="img-fluid" src={favorites[1].propertyImage} waves />
                            <MDBCardBody>
                                <MDBCardTitle><h2>{favorites[1].propertyAddress}</h2></MDBCardTitle>
                                <MDBCardText> Price: ${favorites[1].listPrice}</MDBCardText>
                                <MDBCardText> Bedrooms: ${favorites[1].bedrooms}</MDBCardText>
                                <MDBCardText> Bathrooms: ${favorites[1].bathrooms}</MDBCardText>

                                <MDBBtn color="elegant" className="text-center" href="#">Schedule Showing</MDBBtn>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </>


        )
    }










    return (
        <>

        </>
    );
}

export default UserDetails;