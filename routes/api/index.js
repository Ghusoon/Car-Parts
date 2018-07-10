const router = require("express").Router();
const partRoutes = require("./partsRout");



router.use("/parts", partRoutes);


module.exports = router;
