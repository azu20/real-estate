import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import wash from "../../../Assets/WashburnSearch.png";

import "../TestCards/TestCards.css";
import PhotoModal from '../TestModals/PhotoModal';

const TestCard = (props) => {
  // console.log(props); 

  // const ConsoleLog = (props) => {
  //   console.log("these are the props:"+props.results);
  // }
  return (
    <>
    {/*#############  CHANGES ########## */}
    {/*added customImage Class to control height for consistancy*/}
  
    <MDBCol style={{maxWidth: "22rem"}}>
      <MDBCard>  
        <MDBCardImage className="img-fluid customImage" src={props.photo} waves />

          <MDBCardBody>
          <a className="cameraIconPosition"><PhotoModal src={props.photo}></PhotoModal></a>
          <MDBCardTitle>{props.street}, {props.city}, {props.state}</MDBCardTitle>
          <MDBCardText>{props.price} |  {props.beds} bd | {props.baths} ba | {props.sqft} sqft</MDBCardText>
          <MDBBtn href="#">Dallas I want this house!</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
      


    


  
    </>
  )
}

export default TestCard;