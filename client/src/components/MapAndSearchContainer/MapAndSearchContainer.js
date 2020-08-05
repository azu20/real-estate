import React from "react";
import "./MapAndSearchContainer.css";
import LoginButton from "../LoginButton/LoginButton"
import CardHomeInfo from "../CardHomeInfo/CardHomeInfo";
import SplashScreen from "../SplashScreen/SplashScreen";
import Nav from "../Nav/Nav";
import { useAuth0 } from "@auth0/auth0-react";
import LogoutButton from "../LogoutButton/LogoutButton"

const SearchBar = () => {
  const { isAuthenticated } = useAuth0();
  return (
    <>
    {isAuthenticated ? <LogoutButton /> : <LoginButton />}
    <Nav />
    {/* SplashScreen has "search term" we need for RapidAPI and Maps?  */}
    <SplashScreen></SplashScreen> 
    {/* <CardHomeInfo /> */}

    </>
  )
}

export default SearchBar;