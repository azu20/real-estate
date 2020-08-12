const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  listingID: { type: String},
  listingAgent: { type: String},
  listingCompany: { type: String},
  daysListed: { type: Number},
  listStatus: { type: String},
  address: { type: String},
  city: { type: String},
  state: { type: String},
  zipcode: { type: Number},
  propType: { type: String},
  yearBuilt: { type: Number},
  listPrice: { type: Number},
  propSqFeet: { type: Number},
  lotSqFeet: { type: Number},
  bedroom: { type: Number},
  bathroom: { type: Number},
  subDivision: { type: String},
  annualPropTax: Number,
  taxCounty: String,
  utilityCompany: String,
  schoolInfo: String,
  hoaInfo: String,
  hoaFee: Number,
  propFeatures: String,
  image: String,
  listingLink: String,
  propDetailSummary: String,
  createdDate: { type: Date, default: Date.now },
  updatedDate: { type: Date, default: Date.now },
  likedByUser: [{
      user_id: String, 
      userFullName: String, 
   }],
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;


/******Notes:*************/
// try to capture as much info as possible per property if and when available, review if needed. ****
// definitions:
// list status - for sale, rent, etc. propType= single family home, duplex, etc. 
// prop details = description, propfeatures= appliances, heating/cooling, etc. 

///dont need model for userLists, the PUT rest API call will add a relation to user and 
// property.
//added user_id - each property can be liked by multiple users, linking it through userID key
