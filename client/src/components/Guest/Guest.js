import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import LoginButton from "../LoginButton/LoginButton.js";
import "./Guest.css"
import GuestNav from "../GuestNav/GuestNav";
// import { useAuth0 } from "@auth0/auth0-react";


const Guest = () => {
  // const { user, isAuthenticated } = useAuth0();
  return (
    <>
    <GuestNav/>
    <MDBContainer>
      <MDBRow>
        <MDBCol>
          <MDBJumbotron className="p-0">
            <MDBCol className="house text-white text-center py-5 px-4 my-5">
              <MDBCol className="py-5">
                <MDBCardTitle className="display-3 title h1-responsive m-5 font-bold">
                Your dream home is a few clicks aways. <br></br>
                What are you waiting for?
                    </MDBCardTitle>
                <p className="subtitle mx-5 mb-5">
                    BUY | RENT | SELL
                </p>
                <LoginButton />
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </>
  )
}

export default Guest;