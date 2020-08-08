import React, { useState } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";


const Form = () => {


    const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phone: ""});
    const [errors, setErrors] = useState({ firstName: "", lastName: "", email: "", phone: ""});

    const handleSubmit = event => {

        event.preventDefault();
        setErrors(validation(values));
        submit();
    }

    function submit() {
        console.log("Submitted Successfully")
    }

    function validation(values) {

        let errors = {};

        if (!values.firstName) {
            errors.firstName = "First Name is required";
        }
        if (!values.lastName) {
            errors.lastName = "Last Name is required";
        }
        if (!values.email) {
            errors.lastName = "Email is required";
        }
        if (!values.phone) {
            errors.lastName = "Phone number is required";
        }
        return errors;
    }

    const handleChange = event => {
        
        const {name, value } = event.target;
        setValues(
            {
            ...values,
            [name]: value
            }
        )

    }

    return (

        <MDBContainer>
            <MDBRow>
                <MDBCol md="3"></MDBCol>

                <MDBCol md="6">
                    <form onSubmit={handleSubmit}>
                    <MDBInput
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleChange} />
                        {errors.firstName && <p>{errors.firstName}</p>}
                    <MDBInput 
                        name="lastName" 
                        label="Last Name" 
                        value={values.lastName}
                        onChange={handleChange} />
                        {errors.lastName && <p>{errors.lastName}</p>}
                    <MDBInput 
                        name="email" 
                        label="Email" 
                        value={values.email}
                        onChange={handleChange} />
                        {errors.lastName && <p>{errors.email}</p>}
                    <MDBInput 
                        name="phone" 
                        label="Phone" 
                        value={values.phone}
                        onChange={handleChange} />
                        {errors.lastName && <p>{errors.phone}</p>}
                    <MDBInput label="Price Range" />
                    <MDBBtn type="submit" color="primary">Submit</MDBBtn>
                    </form>
                </MDBCol>

                <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>

    )



}

export default Form;