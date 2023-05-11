const router = require("express").Router();
const user = require("./users");
const auth = require("./auth");

router.use("/api/user", user);
router.use("/api/auth", auth);

module.exports = router;
