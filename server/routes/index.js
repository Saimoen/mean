const router = require("express").Router();
const user = require("./users.routes");
const auth = require("./auth.routes");
const blog = require("./blog.routes");

router.use("/api/user", user);
router.use("/api/auth", auth);
router.use("/api/blog", blog);

module.exports = router;
