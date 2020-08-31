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
  photoGallery: {type: []},
  property_id: {type: String},
  description: {type: String},
  email:{type: String},
  annualPropTax: Number,
  taxCounty: String,
  utilityCompany: String,
  schoolInfo: String,
  hoaInfo: String,
  hoaFee: Number,
  propFeatures: String,
  image: String,
//   imageGallery: [{String}],
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


