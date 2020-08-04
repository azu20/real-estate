const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/realestateapp"
);

const propertySeed = [
  {
    listingID: MLS165438,
    listingAgent: "Melinda Poates",
    listingCompany: "Gerson Realty Co",
    daysListed: 5,
    listStatus: "For Sale",
    address: "5637 E Casper Rd",
    city: "Mesa",
    state: "AZ",
    zipcode: "85205",
    propType: "Single Family Home",
    yearBuilt: 1965,
    listPrice: 225000,
    propSqFeet: 1424,
    lotSqFeet: 7318,
    bedroom: 2,
    bathroom: 2,
    subDivision: "VELDA ROSE ESTATES 3",
    annualPropTax: 842,
    taxCounty: "Maricopa",
    utilityCompany: "sewer: septic, water: City Water, Utilities: SRP",
    schoolInfo: "Mesa Unified School District",
    hoaInfo: "yes",
    hoaFee: 182,
    propFeatures: "Appliances: laundry faciilities: washer/dryer hookup up only, heating and cooling: cooling: ceiling fans, refrigeration. Heating: electric heat, no pool, 2 carport parking spaces",
    image: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg",
    listingLink: "https://www.realtor.com/realestateandhomes-detail/5635-E-Casper-Rd_Mesa_AZ_85205_M17393-80976?view=qv",
    propDetailSummary: "Adult 55+ Community Beautiful, well cared for home in the Velda Rose Estates community. This 2 bedroom 1.75 bath home has upgraded stovetop, oven and dishwasher that are less than 1 year old. AC replaced 4 years ago and 80% sun screens keep this property cool and comfortable. 2 living areas and 2 large bedrooms make this home feel spacious. Plenty of storage inside and out with a laundry room that could also be used as a small workshop. Backyard covered patio perfect to enjoy the beautiful backyard.",
    date: new Date(Date.now())
  },
  {
    listingID: MLS654852,
    listingAgent: "Cindy Trang",
    listingCompany: "Keller Williams Co",
    daysListed: 20,
    listStatus: "For Sale",
    address: "5637 E Casper Rd",
    city: "Mesa",
    state: "AZ",
    zipcode: "85205",
    propType: "Single Family Home",
    yearBuilt: 1965,
    listPrice: 225000,
    propSqFeet: 1424,
    lotSqFeet: 7318,
    bedroom: 2,
    bathroom: 2,
    subDivision: "VELDA ROSE ESTATES 3",
    annualPropTax: 842,
    taxCounty: "Maricopa",
    utilityCompany: "sewer: septic, water: City Water, Utilities: SRP",
    schoolInfo: "Mesa Unified School District",
    hoaInfo: "yes",
    hoaFee: 182,
    propFeatures: "Appliances: laundry faciilities: washer/dryer hookup up only, heating and cooling: cooling: ceiling fans, refrigeration. Heating: electric heat, no pool, 2 carport parking spaces",
    image: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg",
    listingLink: "https://www.realtor.com/realestateandhomes-detail/5635-E-Casper-Rd_Mesa_AZ_85205_M17393-80976?view=qv",
    propDetailSummary: "Adult 55+ Community Beautiful, well cared for home in the Velda Rose Estates community. This 2 bedroom 1.75 bath home has upgraded stovetop, oven and dishwasher that are less than 1 year old. AC replaced 4 years ago and 80% sun screens keep this property cool and comfortable. 2 living areas and 2 large bedrooms make this home feel spacious. Plenty of storage inside and out with a laundry room that could also be used as a small workshop. Backyard covered patio perfect to enjoy the beautiful backyard.",
    date: new Date(Date.now())
  },
  {
    listingID: MLS89767,
    listingAgent: "Bob Kely",
    listingCompany: "ReMax Co",
    daysListed: 65,
    listStatus: "For Sale",
    address: "5637 E Casper Rd",
    city: "Mesa",
    state: "AZ",
    zipcode: "85205",
    propType: "Single Family Home",
    yearBuilt: 1965,
    listPrice: 225000,
    propSqFeet: 1424,
    lotSqFeet: 7318,
    bedroom: 2,
    bathroom: 2,
    subDivision: "VELDA ROSE ESTATES 3",
    annualPropTax: 842,
    taxCounty: "Maricopa",
    utilityCompany: "sewer: septic, water: City Water, Utilities: SRP",
    schoolInfo: "Mesa Unified School District",
    hoaInfo: "yes",
    hoaFee: 182,
    propFeatures: "Appliances: laundry faciilities: washer/dryer hookup up only, heating and cooling: cooling: ceiling fans, refrigeration. Heating: electric heat, no pool, 2 carport parking spaces",
    image: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg",
    listingLink: "https://www.realtor.com/realestateandhomes-detail/5635-E-Casper-Rd_Mesa_AZ_85205_M17393-80976?view=qv",
    propDetailSummary: "Adult 55+ Community Beautiful, well cared for home in the Velda Rose Estates community. This 2 bedroom 1.75 bath home has upgraded stovetop, oven and dishwasher that are less than 1 year old. AC replaced 4 years ago and 80% sun screens keep this property cool and comfortable. 2 living areas and 2 large bedrooms make this home feel spacious. Plenty of storage inside and out with a laundry room that could also be used as a small workshop. Backyard covered patio perfect to enjoy the beautiful backyard.",
    date: new Date(Date.now())
  }
];

db.Property
  .remove({})
  .then(() => db.Property.collection.insertMany(propertySeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
