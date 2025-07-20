import { Router } from "express";
import { TourController } from "./tour.controller";

const router = Router();

router.post("/create", TourController.createTour);
router.post("/create-tour-type", TourController.createTourType);
export const TourRoutes = router;
