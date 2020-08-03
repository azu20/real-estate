import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";

import BartStreet from "../../../Assets/Test_JSON_files/testHomeDetailsBart.json";



const TestPhotoDisplay = () => {


  const handlePhotoclick = () => {
    // when a user clicks on a photo,  RAPID API calls the 
    // property detials endpoint with the property id tag
    // that we provide
    // console.log(BartStreet.properties[0].photos[0].href)
    // console.log(BartStreet.properties[0].photo_count);

  };
  handlePhotoclick();


  //needed in order to give each photo an id that the
  //carousel can keep track out
  let i = 0;
  const photoCarId = () => {
    i++; 
    console.log("is this being called");
    return i;
  }

  return (
   
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={BartStreet.properties[0].photo_count}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
        {BartStreet.properties[0].photos.map(item => (
          <MDBCarouselItem itemId={photoCarId()}>
            <MDBView>
              <img
                className="d-block w-100"
                src={item.href}
               
              />
            </MDBView>
          </MDBCarouselItem>
          ))}


          {/* <MDBCarouselItem itemId="2">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://ap.rdcpix.com/eb4acd1091bba69e3bdfc8ad47cc0470l-m734748646x.jpg"
                alt="Second slide"
              />
            </MDBView>
          </MDBCarouselItem> */}

          {/* <MDBCarouselItem itemId="3">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://ap.rdcpix.com/eb4acd1091bba69e3bdfc8ad47cc0470l-m2758893699x.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem> */}

          {/* <MDBCarouselItem itemId="4">
            <MDBView>
              <img
                className="d-block w-100"
                src="https://ap.rdcpix.com/eb4acd1091bba69e3bdfc8ad47cc0470l-m418675775x.jpg"
                alt="Third slide"
              />
            </MDBView>
          </MDBCarouselItem> */}
        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default TestPhotoDisplay;