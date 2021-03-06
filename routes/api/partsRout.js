const router = require("express").Router();
const partController = require("../../controllers/partController");

router.route("/")
 .get(partController.findAll)
 .post(partController.create);

 router.route("/:id")
 .get(partController.findById)
 .put(partController.update)
 .delete(partController.remove);

 module.exports = router;