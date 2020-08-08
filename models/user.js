const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String},
  phone: { type: Number, required: true },
  preferences: {
    priceRange: {
           maxPrice: {type:  Number}
          //  to: {type: Number}
      },
    bedrooms: { type: Number}, 
    bathrooms: { type: Number}, 
    propertyType: { type: String},
    creationDate: { type: Date, default: Date.now },
    updateDate: { type: Date, default: Date.now }
    }, 
  favoriteProperties: [{
        propertyID: { type: String, required: true }, 
        propertyAddress: { type: String, required: true } ,
        listPrice: { type: Number, required: true }, 
        bedrooms: { type: Number, required: true }, 
        bathrooms: { type: Number, required: true }, 
        propertyImage: { type: String, required: true }
  }
],
  registrationDate: { type: Date, default: Date.now }, 
  updateDate: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;

/********Notes: *********/
//formDetails will capture any info the user filled on the login form. Including details like price range, bedrooms, sq. footage, etc. 