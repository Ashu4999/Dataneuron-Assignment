const express = require("express");
const router = express.Router();
const { getRequestWiseCount } = require("../controllers/requestTrafficLog");

router.route("/").get(getRequestWiseCount);

module.exports = router;
