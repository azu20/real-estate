// import React from "./node_modules/react";
import React from "react";
import { MDBRow, MDBBtn, MDBFormInline, MDBCol, MDBIcon } from "mdbreact"
import "./SearchForm.css"


const SearchForm = (props) => {
    return (
        <>
            <MDBRow class="searchBox">
                <MDBCol className="searchColumn" sm="12" md="2">
                    <MDBFormInline className="text-center md-form mr-auto mb-4 pl-3">
                        <h5 className="cityAndState">City and State</h5>
                        <input className="form-control mr-sm-2" name="search" value={props.search} type="text" onChange={props.handleInputChange} placeholder="Mesa, AZ" aria-label="Search" />
                        <MDBBtn color="elegant" size="3x" rounded type="submit" className="mr-auto searchButton" onClick={props.handleFormSubmit}>Search <MDBIcon size="1x" icon="search-location" /></MDBBtn>
                    </MDBFormInline>
                </MDBCol>
                <MDBCol sm="12" md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum Bedrooms</h5>
                        <select name="selectedBed" onChange={props.handleInputChange}>
                            <option value={0} >0</option>
                            <option value={1}>1+</option>
                            <option value={2}>2+</option>
                            <option value={3}>3+</option>
                            <option value={4}>4+</option>
                            <option value={5}>5+</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol sm="6" md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum Bathrooms</h5>
                        <select name="selectedBath" onChange={props.handleInputChange}>
                            <option value={0} >0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol sm="6" md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum SqFt</h5>
                        <select name="selectedSqFt" onChange={props.handleInputChange} >
                            <option value={0} >0</option>
                            <option value={1000}>1,000</option>
                            <option value={2000}>2,000</option>
                            <option value={3000}>3,000</option>
                            <option value={4000}>4,000</option>
                            <option value={5000}>5,000</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol sm="6" md="2">
                    <div className="box">
                        <h5 className="text-center">Minimum Price</h5>
                        <select name="selectedMin" onChange={props.handleInputChange}>
                            <option value={0} >none</option>
                            <option value={100000}>$100,000</option>
                            <option value={200000}>$200,000</option>
                            <option value={300000} >$300,000</option>
                            <option value={400000}>$400,000</option>
                            <option value={500000}>$500,000</option>
                            <option value={600000}>$600,000</option>
                            <option value={700000}> $700,000</option>
                            <option value={800000}>$800,000</option>
                            <option value={900000}>$900,000</option>
                            <option value={1000000}>$1,000,000</option>
                        </select>
                    </div>
                </MDBCol>
                <MDBCol sm="6" md="2">
                    <div className="box">
                        <h5 className="text-center">Maximum Price</h5>
                        <select name="selectedMax" onChange={props.handleInputChange}>
                            <option value={0} >none</option>
                            <option value={100000}>$100,000</option>
                            <option value={200000}>$200,000</option>
                            <option value={300000} >$300,000</option>
                            <option value={400000}>$400,000</option>
                            <option value={500000}>$500,000</option>
                            <option value={600000}>$600,000</option>
                            <option value={700000}> $700,000</option>
                            <option value={800000}>$800,000</option>
                            <option value={900000}>$900,000</option>
                            <option value={1000000}>$1,000,000</option>
                        </select>
                    </div>
                </MDBCol>
            </MDBRow>

        </>
    );
};

export default SearchForm;


