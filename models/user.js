const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: { type: Number, required: true },
  preferences: {
    priceRange: {
           from: {type:  Number, required: true},
           to: {type: Number, require: true }
      },
    bedrooms: { type: Number, required: true }, 
    bathrooms: { type: Number, required: true }, 
    propertyType: { type: String, required: true },
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

