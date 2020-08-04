const router = require("express").Router();
const propertyController = require("../../controllers/propertyController");

// Matches with "/api/books"
router.route("/")
  .get(propertyController.findAll)
  .post(propertyController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(propertyController.findById)
  .put(propertyController.update)
  .delete(propertyController.remove);

module.exports = router;
