const Router = require("express");
const router = new Router();
const foodRouter = require("./foodRouter");
const shopRouter = require("./shopRouter");
const typeRouter = require("./typeRouter");
const userRouter = require("./userRouter");

router.use("/user", userRouter);
router.use("/type", typeRouter);
router.use("/shop", shopRouter);
router.use("/food", foodRouter);

module.exports = router;
