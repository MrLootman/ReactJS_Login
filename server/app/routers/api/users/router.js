const express = require("express");

const router = express.Router();

const { add, browse } = require("../../../controllers/userActions");
const { hashPassword, authorize } = require("../../../controllers/authActions");
const { credentialsValidation } = require("../../../services/credentialValidation");

router.get("/", authorize, browse);
router.post("/", credentialsValidation, hashPassword, add);

module.exports = router;
