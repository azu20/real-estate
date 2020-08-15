import React from "react";
import Guest from "../Guest/Guest";
import { useAuth0 } from "@auth0/auth0-react";
import MainPage from "../../Pages/MainPage/Main";
import InvisiblePage from "../InvisiblePage/InvisiblePage";
import Favorites from "../../Pages/Favorites/Favorites";

const AuthForFavs= () => {
    const { user, isAuthenticated } = useAuth0();
    const {email} =user;
    return (
    <Favorites user_email={email}/>
    );
};

export default AuthForFavs;