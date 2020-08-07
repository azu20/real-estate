import React, { Component } from 'react';
import { MDBBtn, MDBRow, MDBCard, MDBCardBody, MDBCardImage, MDBCardTitle, MDBCardText, MDBCol, MDBIcon } from 'mdbreact';
import "../CardHomeInfo/CardHomeInfo.css";



class CardHomeInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFavorite: false
     };
  }

  handleFavorites = event => {
    if (this.state.isFavorite){
        this.setState({isFavorite: false})
        //then remove from db
    }else{
        this.setState({isFavorite: true});
        //then add to database
        console.log(event);
    }
    console.log(this.state.isFavorite);
}
  render() {

    return (

      <MDBRow>
        <MDBCol style={{ maxWidth: "22rem" }}>
          <MDBCard>
            <MDBCardImage className="img-fluid customImage" src={this.props.src} waves></MDBCardImage>
            <MDBCardBody>

              { //Ternary operator for icon state 
                (this.state.isFavorite === true)
                  ? <a
                    className="heartIconPosition"
                    onClick={this.handleFavorites}>
                    <MDBIcon
                      className="styleIconRed"
                      icon="heart"
                      size="2x" />
                  </a>
                  : <a
                    className="heartIconPosition"
                    onClick={this.handleFavorites}>
                    <MDBIcon
                      className="styleIconRed"
                      far icon="heart"
                      size="2x" />
                  </a>
              }
              <MDBCardTitle>{this.props.address}</MDBCardTitle>
              <MDBCardText>Price: ${this.props.price} |  Beds:{this.props.bedrooms} | Baths:{this.props.bathrooms} | Sqft:{this.props.sqft}</MDBCardText>
              <MDBBtn href="#">Save Home</MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    )
  }
}

export default CardHomeInfo;


