import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css"
import { MDBBtn } from "mdbreact"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <MDBBtn color="elegant" className="myButton waves" onClick={() => loginWithRedirect()}>Click Here</MDBBtn>;
};

export default LoginButton;