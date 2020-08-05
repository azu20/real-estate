import axios from "axios";

export default {
  search: (city, stateCode ) => axios({
    "method":"GET",
    "url":"https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"realtor.p.rapidapi.com",
    "x-rapidapi-key":"ade8544827msh9659d2e7e6c8896p12e1ddjsnd9a76903cb81",
    "useQueryString":true
    },"params":{
    "sort":"relevance",
    "city":city,
    "limit":"200",
    "offset":"0",
    "state_code":stateCode
    }
    })
  
};
