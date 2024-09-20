const express = require("express");
const { createUser } = require("../controller/user");

const router = express.Router();

router.post("/login", createUser);

module.exports = router;
