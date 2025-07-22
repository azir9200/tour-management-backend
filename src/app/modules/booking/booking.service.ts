import { Tour } from "../tour/tour.model";
import { User } from "../user/user.model";
import { BOOKING_STATUS, IBooking } from "./booking.interface";
import { Booking } from "./booking.model";

const createBooking = async (payload: Partial<IBooking>, userId: string) => {
  const user = await User.findById(userId);
  const tour = await Tour.findById(payload.tour).select("costFrom");

  const booking = Booking.create({
    user,
    tour,
    status: BOOKING_STATUS.PENDING,
    ...payload,
  });
  return booking;
};

export const BookingServices = {
  createBooking,
};
