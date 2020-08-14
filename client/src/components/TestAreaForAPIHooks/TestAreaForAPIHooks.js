import React, { useState, useEffect } from "react";
import { MDBRow } from "mdbreact";
import SplashScreen from "../SplashScreen/SplashScreen";
import axios from "axios";
import TestCard from "./TestCards/TestCards";
import testData from "../../Assets/Test_JSON_files/testHomeData.json";
import TestPhotoDisplay from "./TestPhotoDisplay/TestPhotoDisplay";
import TestMapLeaflet from "./TestMapLeaflet/TestMapLeaflet";
import PhotoModal from "./TestModals/PhotoModal";

const TestAreaForAPIHooks = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);



  //#Fake API Call
  const searchRealatorAPI = () => {
    // console.log("pre api call");
    // console.log(testData.properties)
    // console.log("post api call");
    setResults(testData.properties);

  }



  // ##### this now declared inline, see same function in SplashScreen below
  const handleInputChange = event => {
    setSearch(event.target.value);
    // console.log("Event value keyboard:" + event.target.value)
  };

  const handleFormSubmit = event => {
    event.preventDefault();

    searchRealatorAPI();
  };

  //### conditional rendering, won't need in future
  const ResultsToDisplayYet = () => {

    if (results === []) {
      return (
        <>
          <div>No Data Yet</div>
        </>
      )
    }
    return (
      <div> {results.map(item => (
        <TestCard
          key={item.mls.id}
          city={item.address.city}
          street={item.address.line}
          zip={item.address.postal_code}
          state={item.address.state_cody}
          baths={item.baths}
          beds={item.beds}
          sqft={item.building_size.size}
          price={item.price} />
      ))} </div>

    )
  }

  // ### useEFFECT ##########

  useEffect(() => {
    searchRealatorAPI();
  }, []);


  return (
    <>
      <div className="mt-3">
        {/* #### MODAL #### */}
        <PhotoModal />
        <p>Clickthis</p>
      </div>
      <SplashScreen
        search={search}
        // handleInputChange={event => setSearch(event.target.value)}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />

      {/* <ResultsToDisplayYet/> */}


      <MDBRow> {results.map(item => (
        <TestCard
          key={item.mls.id}
          city={item.address.city}
          street={item.address.line}
          zip={item.address.postal_code}
          state={item.address.state_code}
          baths={item.baths}
          beds={item.beds}
          sqft={item.building_size.size}
          price={item.price}
          photo={item.thumbnail}
          property_id={item.property_id}

        />
      ))} </MDBRow>

      <TestPhotoDisplay />
      <TestMapLeaflet />

    </>
  );
};

export default TestAreaForAPIHooks;