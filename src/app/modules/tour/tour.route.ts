import { Router } from "express";
import { TourController } from "./tour.controller";
import { multerUpload } from "../../config/multer.config";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";
import { validateRequest } from "../../middlewares/validateRequest";
import { createTourZodSchema, updateTourZodSchema } from "./tour.validation";

const router = Router();

//tour type related route
router.post(
  "/create-tour-type",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  TourController.createTourType
);
router.get("/tour-types", TourController.getAllTourTypes);
router.patch("/tour-types/:id", TourController.updateTourType);
router.delete("/tour-types/:id", TourController.deleteTourType);

//tour related
router.post(
  "/create",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.array("files"),
  validateRequest(createTourZodSchema),
  TourController.createTour
);
router.get("/", TourController.getAllTours);
router.get("/:id", TourController.getTourById);
router.patch(
  "/:id",
  checkAuth(Role.ADMIN, Role.SUPER_ADMIN),
  multerUpload.array("files"),
  validateRequest(updateTourZodSchema),
  TourController.updateTour
);
router.delete("/id", TourController.deleteTour);

export const TourRoutes = router;
