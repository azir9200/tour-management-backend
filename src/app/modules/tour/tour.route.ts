import { Router } from "express";
import { TourController } from "./tour.controller";

const router = Router();

//tour related
router.post("/create", TourController.createTour);
router.get("/", TourController.getAllTours);
router.get("/:id", TourController.getTourById);
router.patch("/:id", TourController.updateTour);
router.delete("/id", TourController.deleteTour);

//tour type related route
router.post("/create-tour-type", TourController.createTourType);
router.get("/tour-types", TourController.getAllTourTypes);
router.patch("/tour-types/:id", TourController.updateTourType);
router.delete("/tour-types/:id", TourController.deleteTourType);

export const TourRoutes = router;
