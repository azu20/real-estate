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

    // console.log("these are props: " + props.photo_info)
    //console.log("stat props result:"+ this.state.result)
    //console.log(this.state.result.photo_count)

     console.log("these are props: " + props)

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
            <MDBModalHeader toggle={this.toggle(14)} className="cardFont">{this.props.photo_info.address.line}</MDBModalHeader>
            <MDBModalBody>

             <PhotoCarousel photo_info={this.props.photo_info}/>

            </MDBModalBody>
            <MDBModalFooter center>
              <h5>Description</h5>
              <p>{this.props.photo_info.description}</p>
              
              {/* <h5>User Story</h5> */}
            </MDBModalFooter>
          </MDBModal>

        </MDBContainer>

      </>
    );
  }
}

export default PhotoModal;