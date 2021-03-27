const express = require("express");
const router = express.Router();

// Routes

const homeRouter = require("./homeRoutes");
const departmentRouter = require("./departmentRoutes");
const fetch = require("./fetchDepartment");


// HOME

router.use("/",homeRouter);

// DEPARTMENT

router.use("/department",departmentRouter);
router.use(fetch);


module.exports = router;