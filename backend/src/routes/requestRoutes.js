import express from "express";
import { sendLearningRequest } from "../controllers/requestController.js";

const router = express.Router();

router.post("/send", sendLearningRequest);

// router.get("/accept", acceptRequest);
// router.get("/decline", declineRequest);
// router.get("/user-requests", getUserRequests);

export default router;
