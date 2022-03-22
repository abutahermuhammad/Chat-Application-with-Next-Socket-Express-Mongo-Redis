/** @format */

const express = require("express");
const router = express.Router();
const { getInfo } = require("../controller/genaral.controller");

router.get("/", getInfo);

module.exports = router;
