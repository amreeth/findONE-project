import express from "express";
const router = express.Router();
import multer from "multer";

const storage = multer.memoryStorage({
  destination: (req, res, cb) => {
    cb(null, "");
  },
});
const upload = multer({ storage });

import {
  authUser,
  registerUser,
  updateProfile,
  forgotPassword,
  emailVerify,
  addandRemoveFavourites,
  sendRequest,
  allSentRequests,
  allReceivedRequest,
  updatePassword,
  resetPassword,
  acceptRequest,
  deleteRequest,
  allFriends,
  getUserFriend,
  premiumPurchase,
  getAllFavourites,
  allPremiumsStatus,
  removeFriend
} from "../controllers/userController.js";
import {
  registerUserDetails,
  imagesUpload,
  updateMoredetails,
  getMoreDetails
} from "../controllers/userDetailsController.js";
import { protect } from "../middleware/authMiddleware.js";
import {allQuestions} from '../controllers/questionsController.js'





router.route("/register").post(registerUser);
router.route("/login").post(authUser);
router.route("/verify/:id/:token").get(emailVerify);
router.route("/forgotpassword").post(forgotPassword);
router.route("/password/reset/:token").put(resetPassword);
router.route("/updatepassword").put(protect, updatePassword);
router.route("/profile").put(protect, updateProfile);
router.route("/favadd/:id").get(protect, addandRemoveFavourites);
router.route("/sentrequest/:id").get(protect, sendRequest);
router.route("/allsentrequest").get(protect, allSentRequests);
router.route("/allrequests").get(protect, allReceivedRequest);
router.route("/allfavorites").get(protect, getAllFavourites);
router.route("/acceptrequest/:id").get(protect, acceptRequest);
router.route("/deleterequest/:id").get(protect, deleteRequest);
router.route("/friends").get(protect, allFriends).put(protect,removeFriend);
router.route("/getUsersRecent").get(getUserFriend);
router.route("/allpremium").get(allPremiumsStatus);
router.route("/premiumpurchase").post(protect, premiumPurchase)
router.route('/questions').get(protect,allQuestions)

router.route("/personaldetails").post(protect,registerUserDetails).put(protect,updateMoredetails).get(protect,getMoreDetails)
router.route('/uploadimge').post(protect, upload.single("image"), imagesUpload);


export default router;
