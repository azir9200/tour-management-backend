import { Request, Response } from "express";
import { catchAsync } from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";
import { sendResponse } from "../../utils/sendResponse";
import { JwtPayload } from "jsonwebtoken";

const createBooking = catchAsync(async (req: Request, res: Response) => {
  const decodeToken = req.user as JwtPayload;
  console.log("object", decodeToken);
  const booking = await BookingServices.createBooking(
    req.body,
    decodeToken.userId
  );
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Booking created successfully !",
    data: booking,
  });
});

const getAllBookings = catchAsync(async (req: Request, res: Response) => {
  const result = await BookingServices.getAllBookings();
  console.log("result", result);
  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Booking retrieve successfully !",
    data: result,
  });
});
export const BookingController = {
  createBooking,
  getAllBookings,
};
