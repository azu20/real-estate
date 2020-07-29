import React from "react";
import { MDBJumbotron, MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBIcon } from "mdbreact";
import "../SearchBar/SearchBar.css";
import Cody from "../../Assets/WashburnSearch.png";
const SearchBar = () => {
  return (
    <div className="border">
    <MDBContainer>
      <MDBRow >
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
          <MDBCol className="text-white text-center py-5 px-4 my-5" style={{ backgroundImage: `url(https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_1280.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Create your beautiful website with MDBootstrap</MDBCardTitle>
                <p className="mx-5 mb-5">Lcody ipsum dolor sit amet, consectetur adipisicing elit. Repellat fugiat, laboriosam, voluptatem,
                  optio vero odio nam sit officia accusamus minus error nisi architecto nulla ipsum dignissimos. Odit sed qui, dolorum!
                </p>
                <MDBBtn outline color="white" className="mb-5"><MDBIcon icon="clone" className="mr-2"></MDBIcon> View project</MDBBtn>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    </div>
  )
}

export default SearchBar;