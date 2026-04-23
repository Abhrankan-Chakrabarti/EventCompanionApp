import express from "express";
import { createEvent, getMyEvents } from "../controllers/event.controller.js";
import protect from "../middleware/auth.middleware.js";

const router = express.Router();

router.post("/", protect, createEvent);
router.get("/my", protect, getMyEvents);

export default router;