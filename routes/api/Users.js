const router = require("express").Router();
const userController = require("../../controllers/userController");

// Matches with "/api/users"
router.route("/")
  .get(userController.findAllUsers)
  .post(userController.createUser);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(userController.findUserById)
  .put(userController.updateUser)
  .delete(userController.removeUser);

module.exports = router;
