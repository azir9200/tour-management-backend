import express from "express";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import { TourController } from "./tour.controller";

const router = express.Router();
router.post(
  "/create",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  TourController.createTour
);

export const TourRoutes = router;
