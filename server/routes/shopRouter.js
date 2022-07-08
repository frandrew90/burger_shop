const Router = require("express");
const router = new Router();
const shopController = require("../controllers/shopController");

router.post("/", shopController.create);
router.get("/", shopController.getAll);
router.delete("/");

module.exports = router;
