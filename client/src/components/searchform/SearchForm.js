// import React from "./node_modules/react";
import React from "react";
import { MDBRow, MDBBtn, MDBFormInline, MDBCol, MDBIcon } from "mdbreact"
import "./SearchForm.css"


const SearchForm = (props) => {
    return (
        <>
            <MDBRow>
                <MDBCol md="3">
                    <MDBFormInline className="text-center md-form mr-auto mb-4 pl-3">
                        <h5 className="text-center"> Search City and State</h5>
                        <input className="form-control mr-sm-2" name="search" value={props.search} type="text" onChange={props.handleInputChange} placeholder="Denver,CO" aria-label="Search" />
                        <MDBBtn color="elegant" size="3x" rounded size="md" type="submit" className="mr-auto" onClick={props.handleFormSubmit}>Search <MDBIcon size="1x" icon="search-location" /></MDBBtn>
                    </MDBFormInline>
                </MDBCol>
                <MDBCol md="3">
                    <div className="box">
                        <h5 className="text-center">Minimum Bedrooms</h5>
                        <select>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol md="3">
                    <div className="box">
                    <h5 className="text-center">Minimum Bathrooms</h5>
                        <select placeholder="1">
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol md="3">
                    <div className="box">
                    <h5 className="text-center">Minimum Sqft</h5>
                        <select>
                            <option>1,000+</option>
                            <option>2,000+</option>
                            <option>3,000+</option>
                            <option>4,000+</option>
                            <option>5,000+</option>
                        </select>
                    </div>
                </MDBCol>
            </MDBRow>

        </>
    );
};

export default SearchForm;


