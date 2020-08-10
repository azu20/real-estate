import React from "react";
import { MDBBtn, MDBCard, MDBIcon, MDBCardTitle } from "mdbreact"
import "./Contact.css"

const Contact = () => {

    return (
        <MDBCard
            className='card-image'
            style={{
                backgroundImage:
                    "url('https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg')"
            }}
        >
            <div className='text-white text-center d-flex align-items-center rgba-black-strong py-5 px-4'>
                <div>
                    <h5 className=''>
                        <MDBIcon icon='phone-square-alt' /> Contact Me
        </h5>
                    <MDBCardTitle tag='h3' className='pt-2'>
                        <strong>480-217-6119</strong>
                        <br></br>
                        <strong>soldbydw@gmail.com</strong>

                    </MDBCardTitle>
                    <p>
                        I am here for you every step of the way. If you ever have questions while searching for homes do not hesitiate to reach out and send me a message!
        </p>
                    <MDBBtn color="elegant">
                        <MDBIcon icon='envelope' /> Send Message
        </MDBBtn>
                </div>
            </div>
        </MDBCard>
    )

};

export default Contact;