import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css"

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <button className="myButton" onClick={() => loginWithRedirect()}>Click Here</button>;
};

export default LoginButton;