import React from "react";
import { MDBCol, MDBIcon } from "mdbreact";
import "./MapAndSearchContainer.css";

import CardHomeInfo from "../CardHomeInfo/CardHomeInfo";

const SearchBar = () => {
  return (
    <>
    <MDBCol md="6" className="jumboTron">
      <div className="active-pink-3 active-pink-4 mb-4">
        <input className="form-control" type="text" placeholder="Search" aria-label="Search" />
      </div>
    </MDBCol>
    

    <CardHomeInfo />
    </>
  )
}

export default SearchBar;