
/*
    MIT License

    Copyright (c) 2025 Christian I. Cabrera || XianFire Framework
    Mindoro State University - Philippines
*/

import express from "express";
import { homePage } from "../controllers/homeController.js";
import { employee } from "../controllers/employee.js";
import {
    loginPage,
    registerPage,
    forgotPasswordPage,
    dashboardPage,
    loginUser,
    registerUser,
    logoutUser
} from "../controllers/authController.js";

const router = express.Router();

router.get("/", homePage);

router.get("/login", loginPage);
router.post("/login", loginUser);
router.get("/register", registerPage);
router.post("/register", registerUser);
router.get("/forgot-password", forgotPasswordPage);
router.get("/dashboard", dashboardPage);
router.get("/logout", logoutUser);

// Employee routes
router.get("/employees", employee.index);
router.post("/employees", employee.insert);
// Edit
router.get("/employees/:id/edit", employee.edit);
router.post("/employees/:id/update", employee.update);

// Delete
router.get("/employees/:id/delete", employee.delete);
export default router;
