import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from "mdbreact";
import BartStreet from "../../Assets/Test_JSON_files/testHomeDetailsBart.json";

const TestPhotoDisplay = (props) => {

  console.log("from carousel")
  console.log(props.photo_info)
  //needed in order to give each photo an id that the
  //carousel can keep track out
  let i = 0;
  const photoCarId = () => {
    i++; 
    // console.log("is this being called");
    return i;
  }

  return (
    <MDBContainer>
      <MDBCarousel
        activeItem={1}
        length={props.photo_info.photo_count}
        showControls={true}
        showIndicators={false}
        className="z-depth-1"
        slide
      >
        <MDBCarouselInner>
        {props.photo_info.photos.map(item => (
          <MDBCarouselItem itemId={photoCarId()}>
            <MDBView>
              <img
                className="d-block w-100"
                src={item.href}></img>
              <div className="positionCount">{i} of {props.photo_info.photo_count}</div>  
              </MDBView>
          </MDBCarouselItem>
          ))}

        </MDBCarouselInner>
      </MDBCarousel>
    </MDBContainer>
  );
}

export default TestPhotoDisplay;