const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Import And Use Routers Here
/* ************************************************************************* */

const userRouter = require("./users/router");
const { login } = require("../../controllers/authActions");
const { credentialsValidation } = require("../../services/credentialValidation");

router.use("/users", userRouter);
router.post("/login", credentialsValidation, login)

/* ************************************************************************* */

module.exports = router;
