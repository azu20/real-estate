import React from "react";
import Guest from "../Guest/Guest";
import { useAuth0 } from "@auth0/auth0-react";
import MainPage from "../../Pages/MainPage/Main";
import InvisiblePage from "../InvisiblePage/InvisiblePage";

const Home = () => {
    const { user, isAuthenticated } = useAuth0();

    // function checkUserByEmail(email) {
    //     const found = API.getUser(email)
    //     .then((x) => 
    //     //Todo: write this api 'getUser' endpoint
    //  {       console.log("x", x); 
    //         // if the user exists then return true;
    //         // else return false;
    //         return false;
    // });
    // };
    return (
        <>
            {/* {isAuthenticated ? <MainPage user={user} /> : <Guest />} */}
            {/* {isAuthenticated ? <MainPage user={user} /> : <Guest />} */}

            {/* going to route to them to InvisiblePage --> then to--> Form if the dont exist in DB */}
                {/* not passing Auth0 props here, Invisible page generates its own*/}
                {   isAuthenticated ? <InvisiblePage /> : <Guest />   }
        </>
            );
};

export default Home;