import axios from "axios";

export default {
  // Gets all properties
  getProperties: function () {
    return axios.get("/api/properties");
  },
  // Gets the property with the given id
  getProperty: function (id) {
    return axios.get("/api/properties/" + id);
  },
  // Deletes the property with the given id
  deleteProperty: function (id) {
    return axios.delete("/api/properties/" + id);
  },
  // Saves a property to the database
  saveProperty: function (propertyData) {
    return axios.post("/api/properties", propertyData);
  },
  // update a property to the database
  updateProperty: function () {
    return axios.put("/api/properties/" + id);
  },

  ///*****Users********** */
  // Gets all users
  getUsers: function () {
    return axios.get("/api/users");
  },
  // Gets the user with the given id
  getUser: function (id) {
    return axios.get("/api/users/" + id);
  },
  // update the user with the given id
  updateUser: function (id) {
    return axios.put("/api/users/" + id);
  },
  // Deletes the user with the given id
  deleteUsers: function (id) {
    return axios.delete("/api/users/" + id);
  },
  // Saves a user to the database
  saveUser: function (userData) {
    return axios.post("/api/users", userData);

  };
