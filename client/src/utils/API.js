import axios from "axios";

export default {
  // Gets all properties
  getProperties: async function () {
    let response = axios.get("/api/properties/")
    .catch(err => console.log("error: ", err));
    return response;
  },
  // Gets the property with the given id
  getProperty:  async function (id) {
    let response = axios.get("/api/properties/" + id)
    .catch(err => console.log("error: ", err));
    return response;
  },
  // Deletes the property with the given id
  deleteProperty: async function (id) {
    let response = axios.delete("/api/properties/" + id)
    .then(x => console.log("the response from deleting the proptery is", x))
    .catch(error =>  
      {
         if (error.response) {
            console.log("error: ", error.response);
      }
    }
    );
    return response;
  },
  // Saves a property to the database
  saveProperty: async function (propertyData) {
    console.log("this save property API")
    let response = axios.post("/api/properties/", propertyData)
    .then(x => console.log("the response from posting the property is", x))
    .catch(error =>  
      {
         if (error.response) {
            console.log("error: ", error.response);
      }
    });
    return response;
  },
  // update a property to the database
  updateProperty: async function (id) {
    let response = axios.put("/api/properties/" + id)
    .then(x => console.log("the response from updating the proptery is", x))
    .catch(err => console.log("error: ", err));
    return response;
  },
  ///*****Users********** */
  // Gets all users
  getUsers: async function () {
    let response = axios.get("/api/users/")
    .catch(err => console.log("error: ", err));
    return response;
  },
  // Gets the user with the given id
  getUser: async function (id) {
    let response = axios.get("/api/users/" + id)
    .catch(err => console.log("error: ", err));
    return response;
  },
  // update the user with the given id
  updateUser: async function (id) {
    let response = axios.put("/api/users/" + id)
    .then(x => console.log("the response from updating the user is", x))
    .catch(err => console.log("error: ", err));
    return response;
  },
  // Deletes the user with the given id
  deleteUser: async function (id) {
    let response = axios.delete("/api/users/" + id)
    .then(x => console.log("the response from deleting the user is:", x))
    .catch(err => console.log("error: ", err));
    return response;
  },
  // Saves a user to the database
  saveUser: async function (userData) {
    let response = axios.post("/api/users/", userData)
    .then(x => console.log("the response from posting the user is", x))
    .catch(error =>  
      {
         if (error.response) {
            console.log("error: ", error.response);
      }
    });
    return response;
  },
  search: (city, stateCode ) => axios({
    "method":"GET",
    "url":"https://realtor.p.rapidapi.com/properties/v2/list-for-sale",
    "headers":{
    "content-type":"application/octet-stream",
    "x-rapidapi-host":"realtor.p.rapidapi.com",
    "x-rapidapi-key":"11822a79cbmsh84f65be3e3c1181p1b273ejsn677317876206",
    "useQueryString":true
    },"params":{
    "sort":"relevance",
    "city":city,
    "limit":"10",
    "offset":"0",
    "state_code":stateCode
    }
    })
};
