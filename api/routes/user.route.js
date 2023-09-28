import express from "express";
import { test } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", (req, res) => test);

export default router;
