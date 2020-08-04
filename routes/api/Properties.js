const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// Matches with "/api/properties"
router.route("/properties")
  .get(propertyController.findAll)
  .post(propertyController.create);

// Matches with "/api/properties/:id"
router
  .route("/properties/:id")
  .get(propertyController.findById)
  .put(propertyController.update)
  .delete(propertyController.remove);

module.exports = router;
