const router = require("express").Router();
const user = require("./users");
const auth = require("./auth");
const blog = require("./blog");

router.use("/api/user", user);
router.use("/api/auth", auth);
router.use("/api/blog", blog);

module.exports = router;
