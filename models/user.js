

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({

  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  // authO: { type: String, required: true },
  email: { type: String, required: true },
  // password: { type: String, required: true },
  phone: { type: String, required: true },
  maxPrice: String,
  preferences: {
    priceRange: {
           from: {type:  Number},
           to: {type: Number, require: true }
      },
    bedrooms: { type: Number }, 
    bathrooms: { type: Number }, 
    propertyType: { type: String },
    creationDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
    }, 
  favoriteProperties: [{
        propertyID: { type: String }, 
        propertyAddress: { type: String } ,
        listPrice: { type: Number }, 
        bedrooms: { type: Number }, 
        bathrooms: { type: Number }, 
        propertyImage: { type: String }, 
        // propertyImageGallery: [{ type: String }]
  }
],
  registrationDate: { type: Date, default: Date.now }, 
  lastLogin:  { type: Date, default: Date.now} 
});

const User = mongoose.model("User", userSchema);

module.exports = User;