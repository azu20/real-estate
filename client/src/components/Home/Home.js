import React from "react";
import Guest from "../Guest/Guest";
import { useAuth0 } from "@auth0/auth0-react";
import MainPage from "../../Pages/MainPage/Main";

const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    return (
        <>
            {isAuthenticated ? <MainPage user={user} /> : <Guest />}
        </>
    );
};

export default Home;