const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const propertySchema = new Schema({
  listingID: { type: String, required: true },
  daysListed: { type: Number, required: true },
  listStatus: { type: String, required: true },
  address: { type: String, required: true },
  city: { type: String, required: true },
  state: { type: String, required: true },
  zipcode: { type: Number, required: true },
  propType: { type: String, required: true },
  yearBuilt: { type: Number, required: true },
  listPrice: { type: Number, required: true },
  propSqFeet: { type: Number, required: true },
  lotSqFeet: { type: Number, required: true },
  bedroom: { type: Number, required: true },
  bathroom: { type: Number, required: true },
  price: { type: Number, required: true },
  subDivision: { type: String, required: true },
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
  date: { type: Date, default: Date.now }
});

const Property = mongoose.model("Property", propertySchema);

module.exports = Property;


/******Notes:*************/
// try to capture as much info as possible per property if and when available, review if needed. ****
// definitions:
// list status - for sale, rent, etc. propType= single family home, duplex, etc. 
// prop details = description, propfeatures= appliances, heating/cooling, etc. 
