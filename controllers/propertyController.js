const db = require("../models");

// Defining methods for the booksController
module.exports = {
  findAllProperties: function (req, res) {
    db.Property
      .find()
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findPropertyById: function (req, res) {
    db.Property
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findTopProperties: function (req, res) {
    db.Property
//      .aggregate([{ $unwind: "$likedByUser" }, { $sortByCount: "$likedByUser" }])
      .find()
      .sort({"likedByUser":-1})
      .limit(2) 
      .then(dbModel => {
        //console.log("**************************", dbModel);
        return res.json(dbModel);
      })
      .catch(err => res.status(422).json(err));
  },
  createProperty: function (req, res) {
    console.log("this is the req.body" +req.body);
    db.Property
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
      console.log ("show req.body", req.body);
  },
  updateProperty: function (req, res) {
    db.Property
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  removeProperty: function (req, res) {
    db.Property
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
