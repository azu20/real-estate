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
        propertyID: { type: Number, required: true }, 
        propertyAddress: { type: String, required: true ,
        listPrice: { type: Number, required: true }, 
        bedrooms: { type: Number, required: true }, 
        bathrooms: { type: Number, required: true }, 
        propertyImage: { type: String, required: true }, 
  }],
  registrationDate: { type: Date, default: Date.now }, 
  updateDate: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/********Notes: *********/
//formDetails will capture any info the user filled on the login form. Including details like price range, bedrooms, sq. footage, etc. 