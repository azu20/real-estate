const router = require("express").Router();
const userRoutes = require("./Users");
const propertyRoutes = require("./Properties")

// Book routes
router.use("/users", userRoutes);
router.use("/properties", propertyRoutes);

module.exports = router;
