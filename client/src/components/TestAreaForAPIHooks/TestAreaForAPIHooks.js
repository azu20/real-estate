import React, { useState, useEffect } from "react";
import SplashScreen from "../SplashScreen/SplashScreen";
import axios from "axios";
import TestCard from "./TestCards/TestCards";
import testData from  "../../Assets/testHomeData.json";


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
        
        console.log(testData)
        setResults(testData);

    }
      //### WORKING RAPID-API Call 
    // const searchRealatorAPI = () => {
    //   axios ({
    //     "method":"GET",
    //     "url":"https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
    //     "headers":{
    //     "content-type":"application/octet-stream",
    //     "x-rapidapi-host":"realtor.p.rapidapi.com",
    //     "x-rapidapi-key":"c691c22375msh7f4aeaa1564c418p132c02jsn24b19b5f8e2d",
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
    function ResultsToDisplayYet(props) {
  
      if(results === []){
        return(
          <>
          <div>No Data Yet</div>
          </>
        )
      }
        return (
          <TestCard results={results} />
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
            <br></br>
            <ResultsToDisplayYet/>
          
            
        </>
    );
};

export default TestAreaForAPIHooks;