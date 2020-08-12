// import React from "./node_modules/react";
import React from "react";
import { MDBRow, MDBBtn, MDBFormInline, MDBCol, MDBIcon } from "mdbreact"
import "./SearchForm.css"


const SearchForm = (props) => {
    return (
        <>
            <MDBRow>
                <MDBCol className="searchColumn" md="2">
                    <MDBFormInline className="text-center md-form mr-auto mb-4 pl-3">
                        <h5 className="cityAndState">City and State</h5>
                        <input className="form-control mr-sm-2" name="search" value={props.search} type="text" onChange={props.handleInputChange} placeholder="Denver, CO" aria-label="Search" />
                        <MDBBtn color="elegant" size="3x" rounded size="md" type="submit" className="mr-auto searchButton" onClick={props.handleFormSubmit}>Search <MDBIcon size="1x" icon="search-location" /></MDBBtn>
                    </MDBFormInline>
                </MDBCol>
                <MDBCol md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum Bedrooms</h5>
                        <select>
                            <option selected>0</option>
                            <option>1+</option>
                            <option>2+</option>
                            <option>3+</option>
                            <option>4+</option>
                            <option>5+</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum Bathrooms</h5>
                        <select placeholder="1">
                            <option selected>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum SqFt</h5>
                        <select>
                        <option selected>0</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum Price</h5>
                        <select>
                            <option selected>none</option>
                            <option>$100,000</option>
                            <option>$200,000</option>
                            <option>$300,000</option>
                            <option>$400,000</option>
                            <option>$500,000</option>
                            <option>$600,000</option>
                            <option>$700,000</option>
                            <option>$800,000</option>
                            <option>$900,000</option>
                            <option>$1,000,000</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol md="2">
                    <div className="box">
                        <h5 className="text-center">Maximum Price</h5>
                        <select>
                            <option selected>none</option>
                            <option>$100,000</option>
                            <option>$200,000</option>
                            <option>$300,000</option>
                            <option>$400,000</option>
                            <option>$500,000</option>
                            <option>$600,000</option>
                            <option>$700,000</option>
                            <option>$800,000</option>
                            <option>$900,000</option>
                            <option>$1,000,000</option>
                        </select>
                    </div>
                </MDBCol>
            </MDBRow>

        </>
    );
};

export default SearchForm;


