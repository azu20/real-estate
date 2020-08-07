import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavItem, MDBNavLink } from "mdbreact";

export default () => (
  <BrowserRouter>

    <MDBNav>
      <MDBNavItem>
        <MDBNavLink active to="#!"><SearchForm></MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Link</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink to="#!">Link</MDBNavLink>
      </MDBNavItem>
      <MDBNavItem>
        <MDBNavLink disabled to="#!">Disabled</MDBNavLink>
      </MDBNavItem>
    </MDBNav>

  </BrowserRouter>
);