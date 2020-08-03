import React, { useState, useEffect } from "react";
import {MDBRow} from "mdbreact";
import SplashScreen from "../SplashScreen/SplashScreen";
import axios from "axios";
import TestCard from "./TestCards/TestCards";
import testData from  "../../Assets/Test_JSON_files/testHomeData.json";
import TestPhotoDisplay from "./TestPhotoDisplay/TestPhotoDisplay";

const TestAreaForAPIHooks = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    

    // ### API FUNCTION  - activity async example

    // const searchRealatorAPI = async () => {
    //     try {
    //         const result = await axios.get(BASE_URL + search + API_KEY);

    //         setResults(result.data.data);

    //         // console.log(result.data.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };


    //#Fake API Call
      const searchRealatorAPI = () => {
        // console.log("pre api call");
        console.log(testData.properties)
        // console.log("post api call");
        setResults(testData.properties);

    }
      //### WORKING RAPID-API Call 
    // const searchRealatorAPI = () => {
    //   axios ({
    //     "method":"GET",
    //     "url":"https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
    //     "headers":{
    //     "content-type":"application/octet-stream",
    //     "x-rapidapi-host":"realtor.p.rapidapi.com",
    //     "x-rapidapi-key":process.env.REACT_APP_RAPIDAPI_KEY ,
    //     "useQueryString":true
    //     },"params":{
    //     "sort":"relevance",
    //     "city":"Gilbert",
    //     "limit":"10",
    //     "offset":"0",
    //     "state_code":"AZ"
    //     }
      
    //     })
    //     .then((results)=>{
    //       // console.log(response)
    //       console.log("reqest bs");
    //       console.log(results.data.properties[0].address.line);
    //       setResults(results);

      
    //     })
    //     .catch((error)=>{
    //       console.log(error)
    //     })
      //  };


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
  
      if(results === []){
        return(
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
            price={item.price}/>
            ))} </div>
        
          )
    }

    // ### useEFFECT ##########

    useEffect(() => {
      searchRealatorAPI();
    }, []);
    

    return (
        <>
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

          <TestPhotoDisplay/>   
            
        </>
    );
};

export default TestAreaForAPIHooks;