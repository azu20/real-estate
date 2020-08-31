import React, { useState, useEffect } from "react";
import Form from "../../Pages/Form/Form";
import { useAuth0 } from "@auth0/auth0-react";
import API from "../../utils/API"
import MainPage from "../../Pages/MainPage/Main";

// if they are new, send them to the form page
// if they are existing, send them to the main page

// undetermined - pre API call
// unregistered - after API, no existing record
// registered - after API, existing record

const InvisiblePage = () => {

    const [userStatus, setUserStatus] = useState("undetermined");

    const { user } = useAuth0();
    const { email } = user;
    //console.log(useAuth0())
    console.log(user);
    console.log("Auth0 email: "+ email);




    const isUserRegistered = async (email) => {

        try {
            const data = await API.getUsers()
            //console.log("PROMISE RESULT:", data)

            for (let i=0; i<data.data.length; i++){

               
                if(data.data[i].email === email){
                    //console.log("return true" +data.data[i].email)
                    return true;
                }

            }
                       //  return data ? true : false;

        } catch (error) {
            console.log("API ERROR:", error);
        }

    }

    useEffect(() => {

        // console.log("something happened")
        doSomething(email)
    }, [])

    const doSomething = (email) => {
        console.log("do somthing email:" + email);
        isUserRegistered(email).then((result) => {

            if (userStatus === "undetermined" && result) {

                setUserStatus("registered")
                // console.log("Status updated to registered")
                // console.log("this is the result: " +result);
            } else {
                setUserStatus("unregistered")
                // console.log("Status updated to unregistered")
            }

            })
    }

    console.log("Status:", userStatus)

    return (
        <>
            {/* this is where MainPage gets Auth0 user */}
            {userStatus === "registered" ? <MainPage user={user}/> : <Form />}
        </>
    );
};

export default InvisiblePage; 