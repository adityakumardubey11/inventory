"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Set up the GET route for the dashboard
router.get("/", userController_1.getUsers);
exports.default = router;
