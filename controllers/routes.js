const express = require("express");
const router = express.Router();

// Routes

const homeRouter = require("./homeRoutes");
const departmentRouter = require("./departmentRoutes");
const fetchDepartment = require("./fetchDepartment");
const dateRouter = require("./dateRoutes");
const fetchDate = require("./fetchDate");



// HOME

router.use("/",homeRouter);

// DEPARTMENT

router.use("/department",departmentRouter);
router.use(fetchDepartment);

// DATE

router.use("/date",dateRouter);
router.use(fetchDate);


module.exports = router;