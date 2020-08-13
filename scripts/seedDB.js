const mongoose = require("mongoose");
const db = require("../models");

// This file empties he Properties and Users collections and inserts the books below

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb+srv://azucena_1:wc5vclNd7KxqpytQ@cluster-p7dpjvmj.6prcb.mongodb.net/heroku_p7dpjvmj?retryWrites=true&w=majority"

// );

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/realestateapp");

const propertySeed = [
  {
    listingID: 165438,
    listingAgent: "Melinda Poates",
    listingCompany: "Gerson Realty Co",
    daysListed: 5,
    listStatus: "For Sale",
    address: "6834 N. Julian Rd",
    city: "Chandler",
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
    date: "2020-08-04 07:16pm",
    likedByUser: [{
      email: "socialism6549@yahoo.com",
      userFullName: "John Doe"
    }, {
      email: "thepheonix@gmail.com",
      userFullName: "Jean Grey"
    },
    {
      email: "imanactress@yahoo.com",
      userFullName: "Emma Stone"
    }, {
      email: "socialism6549@gmail.com",
      userFullName: "Karl Marx"
    }
    ]
  },
  {
    listingID: 654852,
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
    bedroom: 4,
    bathroom: 2.5,
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
    date: "2020-08-04 07:16pm",
    likedByUser: [{
      email: "socialism6549@gmail.com",
      userFullName: "Karl Marx",
    }]
  },
  {
    listingID: 89767,
    listingAgent: "Bob Kely",
    listingCompany: "ReMax Co",
    daysListed: 65,
    listStatus: "For Sale",
    address: "222 E Devon Dr.",
    city: "Mesa",
    state: "AZ",
    zipcode: "85205",
    propType: "Single Family Home",
    yearBuilt: 1965,
    listPrice: 550000,
    propSqFeet: 1424,
    lotSqFeet: 7318,
    bedroom: 5,
    bathroom: 3.5,
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
    date: new Date(Date.now()),
    likedByUser: [{
      email: "socialism6549@gmail.com",
      userFullName: "Karl Marx"
    },  {
      email: "socialism6549@yahoo.com",
      userFullName: "John Doe"
    }],
  }
];

const userSeed = [
  {
    lastLogin: new Date(Date.now() - 12*1000 * 3600 * 24),
    firstName: "Karl",
    lastName: "Marx",
    email: "socialism6549@gmail.com",
    password: "veryPrivate456",
    phone: 5426246496,
    preferences: {
      priceRange: {
        from: 475000,
        to: 550000
      },
      bedrooms: 4,
      bathrooms: 2.5,
      propertyType: "single family home",
      creationDate: new Date(Date.now()),
      updateDate: new Date(Date.now()),
    },
    favoriteProperties: [{
      propertyID: "89767",
      propertyAddress: "6834 N. Julian Rd",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }
    ],
    registrationDate: new Date(Date.now()),
    updateDate: new Date(Date.now())
  },
  {
    lastLogin: new Date(Date.now() - 5*1000 * 3600 * 24),
    firstName: "John",
    lastName: "Doe",
    email: "socialism6549@yahoo.com",
    password: "veryPrivate456",
    phone: 5426246496,
    preferences: {
      priceRange: {
        from: 475000,
        to: 550000
      },
      bedrooms: 4,
      bathrooms: 2.5,
      propertyType: "single family home",
      creationDate: new Date(Date.now()),
      updateDate: new Date(Date.now())
    },
    favoriteProperties: [{
      propertyID: "89767",
      propertyAddress: "222 E Devon Dr.",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }, {
      propertyID: "89767",
      propertyAddress: "6834 N. Julian Rd",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }
    ],
    registrationDate: new Date(Date.now()),
    updateDate: new Date(Date.now())
  },
  {
    lastLogin: new Date(Date.now()),
    firstName: "Emma",
    lastName: "Stone",
    email: "imanactress@yahoo.com",
    password: "veryPrivate456",
    phone: 5426246496,
    preferences: {
      priceRange: {
        from: 475000,
        to: 550000
      },
      bedrooms: 4,
      bathrooms: 2.5,
      propertyType: "single family home",
      creationDate: new Date(Date.now()),
      updateDate: new Date(Date.now())
    },
    favoriteProperties: [{
      propertyID: "89767",
      propertyAddress: "5637 E Casper Rd",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }, 
    {
      propertyID: "89767",
      propertyAddress: "5637 E Casper Rd",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }
    ],
    registrationDate: new Date(Date.now()),
    updateDate: new Date(Date.now())
  }, 
  {
    lastLogin: new Date(Date.now() - 10*1000 * 3600 * 24),
    firstName: "Jean",
    lastName: "Grey",
    email: "thepheonix@gmail.com",
    password: "veryPrivate456",
    phone: 5426246496,
    preferences: {
      priceRange: {
        from: 475000,
        to: 550000
      },
      bedrooms: 4,
      bathrooms: 2.5,
      propertyType: "single family home",
      creationDate: new Date(Date.now()),
      updateDate: new Date(Date.now())
    },
    favoriteProperties: [
      {
      propertyID: "165438",
      propertyAddress: "6834 N. Julian Rd",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }, 
    {
      propertyID: "654852",
      propertyAddress: "5637 E Casper Rd",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }, 
    {
      propertyID: "89767",
      propertyAddress: "222 E Devon Dr.",
      listPrice: 225000,
      bedrooms: 5,
      bathrooms: 3.5,
      propertyImage: "https://ap.rdcpix.com/13b9a276c388dfc0687fcef1acfc87e4l-m3084758060od-w1024_h768.jpg"
    }, 
    ],
    registrationDate: new Date(Date.now()),
    updateDate: new Date(Date.now())
  }
];


db.Property
  .remove({})
  .then(() => {
    console.log("Inserting into Property");
    return db.Property.collection.insertMany(propertySeed);
  })
  .then(data => {
    console.log(data.result.n + " records inserted!");
  })
  .then(() => {
    console.log("Starting User");
    db.User
      .remove({})
      .then(() => {
        console.log("Inserting into User");
        return db.User.collection.insertMany(userSeed)
      }).then(x => {
        console.log(x.result.n + " records inserted!");
        process.exit(0);
      })
      .catch(err => {
        console.error(err);
      });
  })
  .catch(err => {
    console.error("error: ", err.result);

  });
