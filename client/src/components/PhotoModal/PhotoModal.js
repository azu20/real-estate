import React, { Component, MDBTooltip } from 'react';
import { MDBContainer, MDBImage, MDBIcon, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact'
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';
import API from "../../utils/API";

class PhotoModal extends Component {

  constructor(props) {
    super(props)
    this.state = {
      modal14: false,
      result: {}

    };
    //  console.log("these are props: " + props.src)
    //console.log("stat props result:"+ this.state.result)
    //console.log(this.state.result.photo_count)
  };


  toggle = nr => () => {
    
    
    let modalNumber = 'modal' + nr
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });


  }

  render() {
    const style = { display: "inline-block", maxWidth: "50vh" };
    return (
      <>
        <MDBContainer>
          <MDBIcon
            icon="camera"
            size="2x"
            className="styleGreen"
            onClick={this.toggle(14)} />

          <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">About this Property</MDBModalHeader>
            <MDBModalBody>

             <PhotoCarousel photo_info={this.state.result}/>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Description</h5>
              <p>This full stack application is deployed on Heroku with JawsDB.  The project focus was understanding and working with the MVC model.</p>
              <p>The application is a Burger logger.  It allows you to add new burgers to the list and eventually eat them.  Each action makes requests to the DB and updates to the display.</p>
              <p>**WARNING - app loads slow due to Heroku and the 'Huge' background file I used</p>
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default PhotoModal;