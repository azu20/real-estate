import React, { Component } from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import "../CardHomeInfo/CardHomeInfo.css";
import PhotoModal from "../PhotoModal/PhotoModal";
import API from '../../utils/API';



class CardHomeInfo extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
      isFavorite: false,
      cardInfo: {},
      photo_info:{},
      photosCard: false
    }
    // console.log("this is props"+ this.props.email)
  }


 

  handleFavorites = (event) => {
    if (this.state.isFavorite) {
      this.setState({ isFavorite: false })

        // API.deleteProperty(property);
      //delete to fav
 
    } else {
      this.setState({ isFavorite: true });

      //make API call for details, need property id
      //this.props.property_id
      //then send all info to db

      API.detailedSearch(this.props.property_id)
      .then(data =>{
        //console.log("this is property_id:" + this.props.property_id )
        //console.log(data.data.properties[0].photo_count)
        //console.log("test")
        this.setState({
          photo_info: data.data.properties[0],
          photosCard: true
        })
      console.log("this are photos")
      console.log(this.state.photo_info.photos)
      //console.log(this.state.photo_info.photo_count)
        

      let property = {
        address: this.props.address,
        listPrice: this.props.price,
        image: this.props.src,
        bedroom: this.props.bedrooms,
        bathroom: this.props.bathrooms,
        city: this.props.city,
        state: this.props.state,
        zipcode: this.props.zip,
        photoGallery: this.state.photo_info.photos,
        property_id: this.props.property_id,
        description: this.state.photo_info.description,
        email: this.props.email,
        propertyId: this.props.property_id

        

        //**will need  property model updates */
        // listing_id: this.props.property_id
        // email: this.props.email
        // photoGallery: result
        // extendedDetails: result
        
      }
        // this.setState({ result: data.data.properties[0] })
        //### build out the object to send to the DB
        API.saveProperty(property) 
      })
      .catch(err => console.log(err));
   
    }
   
  }
  render() {

    return (

      <MDBRow>
        <MDBCol >
          <MDBCard className="cardSizing">
            <MDBCardImage className="img-fluid customImage" src={this.props.src} waves></MDBCardImage>
            <MDBCardBody>

              { //Ternary operator for icon state 
                (this.state.isFavorite === true)
                  ? <a
                    className="heartIconPosition"
                    onClick={this.handleFavorites}
                  // onClick={() => this.handleFavorites(this.props.bedrooms)} 
                  >
                    <MDBIcon
                      className="styleIconRed"
                      icon="heart"
                      size="2x" />
                  </a>
                  
                  : <a
                    className="heartIconPosition"
                    onClick={this.handleFavorites}
                  // onClick={() => this.handleFavorites(this.props.bedrooms)}
                  >
                    <MDBIcon
                      className="styleIconRed"
                      far icon="heart"
                      size="2x" />
                  </a>
              }
              {/* determine if we load Modal for Photos */}
              {
                (this.state.photosCard)
                ? <a className="cameraIconPosition" ><PhotoModal className="styleGreen" photo_info={this.state.photo_info} ></PhotoModal></a>
                : <></>
              }
              <MDBCardTitle>Price: ${this.props.price} </MDBCardTitle>
              <MDBCardText>Beds: {this.props.bedrooms} | Baths: {this.props.bathrooms} </MDBCardText>
              <MDBCardText>{this.props.address} </MDBCardText>
              <MDBCardText>{this.props.city}, {this.props.state} {this.props.zip}</MDBCardText>
              {/* <MDBBtn href="#">Save Home</MDBBtn> */}
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default CardHomeInfo;


