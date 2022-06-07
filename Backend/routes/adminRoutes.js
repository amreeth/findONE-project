import express from "express";
import { authAdmin, getUsers,allPremiumStatus,addPremium } from "../controllers/adminController.js";

import { protectAdmin } from "../middleware/authMiddleware.js";

import {
  addQuestion,
  allQuestions,
  deleteQuestion,
  editQuestion
} from "../controllers/questionsController.js";

const router = express.Router();

// router.route("/register").post(registerAdmin)
router.route("/login").post(authAdmin);
// router.route('/').get()
router.route("/usermanagement").get(protectAdmin, getUsers);

router
  .route("/question/:id")
  .post(protectAdmin, addQuestion)
  .delete(protectAdmin, deleteQuestion)
  .put(protectAdmin,editQuestion);
router.route("/allquestions").get(allQuestions);

router.route('/allPremiumStatus').get(protectAdmin,allPremiumStatus)
router.route('/addpremium').post(protectAdmin,addPremium)

export default router;
