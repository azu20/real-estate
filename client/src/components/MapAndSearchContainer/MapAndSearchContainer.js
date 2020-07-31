import React from "react";
import "./MapAndSearchContainer.css";

import CardHomeInfo from "../CardHomeInfo/CardHomeInfo";
import SplashScreen from "../SplashScreen/SplashScreen";
import Nav from "../Nav/Nav";

const SearchBar = () => {
  return (
    <>
    <Nav />
    {/* SplashScreen has "search term" we need for RapidAPI and Maps?  */}
    <SplashScreen></SplashScreen> 
    {/* <CardHomeInfo /> */}

    </>
  )
}

export default SearchBar;