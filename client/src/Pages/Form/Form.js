import React, { useState, useEffect } from "react"
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from "mdbreact";
import "./Form.css"
import API from "../../utils/API"


const Form = () => {


    const [values, setValues] = useState({ firstName: "", lastName: "", email: "", phone: "", maxPrice: ""});
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = event => {

        event.preventDefault();
        setErrors(validation(values));
        setIsSubmitting(true);
        // submit();
    }

    useEffect(() => {
        
        //check to see if there are any errors, if not, then submit 
        if (Object.keys(errors).length === 0 && isSubmitting) {
            submit();
            
        }
    }, [errors])

    function submit() {
        
        API.saveUser(values)
            .then(response => {

                setValues(response.data)
            })
            .catch(err => console.log(err))
        
        console.log("Submitted Successfully:", values)
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
            errors.email = "Email is required";
        }
        if (!values.phone) {
            errors.phone = "Phone number is required";
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
                        className={`${errors.firstName && "inputError"}`}
                        name="firstName"
                        label="First Name"
                        value={values.firstName}
                        onChange={handleChange} />
                        {errors.firstName && <p className="error">{errors.firstName}</p>}
                    <MDBInput 
                        className={`${errors.lastName && "inputError"}`}
                        name="lastName" 
                        label="Last Name" 
                        value={values.lastName}
                        onChange={handleChange} />
                        {errors.lastName && <p className="error">{errors.lastName}</p>}
                    <MDBInput 
                        className={`${errors.email && "inputError"}`}
                        name="email" 
                        label="Email" 
                        value={values.email}
                        onChange={handleChange} />
                        {errors.email && <p className="error">{errors.email}</p>}
                    <MDBInput 
                        className={`${errors.phone && "inputError"}`}
                        name="phone" 
                        label="Phone" 
                        value={values.phone}
                        onChange={handleChange} />
                        {errors.phone && <p className="error">{errors.phone}</p>}
                    <MDBInput 
                        className={`${errors.maxPrice && "inputError"}`}
                        name="maxPrice" 
                        label="Max Price" 
                        value={values.maxPrice}
                        onChange={handleChange} />
                        {errors.maxPrice && <p className="error">{errors.maxPrice}</p>}

                    <MDBBtn type="submit" color="primary">Submit</MDBBtn>
                    
                    </form>
                </MDBCol>

                <MDBCol md="3"></MDBCol>
            </MDBRow>
        </MDBContainer>

    )



}

export default Form;