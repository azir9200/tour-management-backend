import { ITour, ITourType } from "./tour.interface";
import { Tour, TourType } from "./tour.model";

const createTour = async (payload: ITour) => {
  const existingTour = await Tour.findOne({ title: payload.title });
  if (existingTour) {
    throw new Error("A tour with this title already exists.");
  }

  const tour = await Tour.create(payload);
  return tour;
};

const createTourType = async (payload: ITourType) => {
  console.log(payload);
  const existingTourType = await TourType.findOne({ name: payload.name });

  if (existingTourType) {
    throw new Error("Tour type already exists.");
  }

  const tourType = await TourType.create({ name: payload.name });
  console.log("object ", tourType);
  return tourType;
};

export const TourService = {
  createTour,
  createTourType,
};
