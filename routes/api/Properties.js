const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// Matches with "/api/properties"
router.route("/")
  .get(propertyController.findAllProperties)
  .post(propertyController.createProperty);

// Matches with "/api/properties/:id"
router
  .route("/top/:number")
  .get(propertyController.findTopProperties);

router
  .route("/:id")
  .get(propertyController.findPropertyById)
  .put(propertyController.updateProperty)
  .delete(propertyController.removeProperty);


module.exports = router;
