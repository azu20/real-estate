import React, { Component } from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import "../CardHomeInfo/CardHomeInfo.css";
import API from '../../utils/API';



class CardHomeInfo extends Component {
  constructor(props) {
    super(props);

   
    this.state = {
      isFavorite: false,
      cardInfo: {}
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

      let property = {
        address: this.props.address,
        listPrice: this.props.price,
        image: this.props.src,
        bedroom: this.props.bedrooms,
        bathroom: this.props.bathrooms,
        city: this.props.city,
        state: this.props.state,
        zipcode: this.props.zip,
        

        //**will need  property model updates */
        // listing_id: this.props.property_id
        // email: this.props.email
        // photoGallery: result
        // extendedDetails: result
        
      }
      //add to fav

      API.saveProperty(property) 
   
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
              <MDBCardTitle>Price: ${this.props.price} </MDBCardTitle>
              <MDBCardText>Beds: {this.props.bedrooms} | Baths: {this.props.bathrooms} | Sqft: {this.props.sqft}</MDBCardText>
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


