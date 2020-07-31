import React from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol } from 'mdbreact';
import wash from "../../Assets/WashburnSearch.png";

import "../CardHomeInfo/CardHomeInfo.css";



const CardHomeInfo = () => {
  return (
    <>
    {/*#############  CHANGES ########## */}
    {/*added customImage Class to control height for consistancy*/}
    <MDBRow>
    <MDBCol style={{maxWidth: "22rem"}}>
      <MDBCard>
        <MDBCardImage className="img-fluid customImage" src={wash} waves />
        <MDBCardBody>
          <MDBCardTitle>123 Easy Street Mesa, AZ</MDBCardTitle>
          <MDBCardText>$359,000 |  4bd | 3ba | 2750 sqft</MDBCardText>
          <MDBBtn href="#">Dallas I want this house!</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
      
    <MDBCol style={{ maxWidth: "22rem" }} >
      <MDBCard>
        <MDBCardImage className="img-fluid customImage" src="https://mdbootstrap.com/img/Mockups/Lightbox/Thumbnail/img%20(67).jpg"
          waves />
        <MDBCardBody>
          <MDBCardTitle>1264 React Ct Reno,NV</MDBCardTitle>
          <MDBCardText>$359,000 |  4bd | 3ba | 2750 sqft</MDBCardText>
          <MDBBtn href="#">Dallas I want this house!</MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBCol>
    <MDBCol>

    </MDBCol>

    


    </MDBRow>
    </>
  )
}

export default CardHomeInfo;