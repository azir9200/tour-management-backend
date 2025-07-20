<<<<<<< HEAD
import { Router } from "express";
import { TourController } from "./tour.controller";
// import { checkAuth } from "../../middlewares/checkAuth";
// import { Role } from "../user/user.interface";

const router = Router();


router.post(
  "/create-tour-type",
  //   checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  TourController.createTourType
);

router.post("/create", TourController.createTour);

router.get("/", TourController.getAllTours);
=======
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

>>>>>>> passport
export const TourRoutes = router;
