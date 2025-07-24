import express from "express";
import { BookingController } from "./booking.controller";
import { checkAuth } from "../../middlewares/checkAuth";
import { Role } from "../user/user.interface";

const router = express.Router();

router.post(
  "/",
  checkAuth(...Object.values(Role)),
  BookingController.createBooking
);

router.get("/", BookingController.getAllBookings);

export const BookingRoutes = router;
