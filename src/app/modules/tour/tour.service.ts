import { ITour, ITourType } from "./tour.interface";
import { Tour, TourType } from "./tour.model";

const createTour = async (payload: ITour) => {
  const existingTour = await Tour.findOne({ title: payload.title });
  if (existingTour) {
    throw new Error("A tour with this title already exists.");
  }
  console.log(payload);

  const tour = await Tour.create(payload);

  return tour;
};
// Get all Tours
const getAllTours = async () => {
  const tour = await Tour.find();
  return tour;
};
// Update a Tour
const updatedTour = async (id: string, payload: Partial<ITour>) => {
  const existingTour = await Tour.findById(id);
  if (!existingTour) {
    throw new Error("Tour not found.");
  }

  const updatedTour = await Tour.findByIdAndUpdate(id, payload, { new: true });
  return updatedTour;
};

// get Tours by id
const getTourById = async (id: string) => {
  return await Tour.findById(id);
};
// delete all Tours
const deleteTour = async (id: string) => {
  return await Tour.findByIdAndDelete(id);
};
const createTourType = async (payload: ITourType) => {
  const existingTourType = await TourType.findOne({ name: payload.name });

  if (existingTourType) {
    throw new Error("Tour type already exists.");
  }

  return await TourType.create({ name: payload.name });
};

// Get all Tours Types
const getAllTourTypes = async () => {
  return await TourType.find();
};
// update all Tour types
const updateTourType = async (id: string, payload: ITourType) => {
  const existingTourType = await TourType.findById(id);
  if (!existingTourType) {
    throw new Error("Tour type not found.");
  }
  const updatedTourType = await TourType.findByIdAndUpdate(id, payload, {
    new: true,
  });
  return updatedTourType;
};

// delete all Tours Types
const deleteTourType = async (id: string) => {
  const existingTourType = await TourType.findById(id);
  if (!existingTourType) {
    throw new Error("Tour type not found.");
  }
  return await TourType.findByIdAndDelete(id);
};

export const TourService = {
  createTour,
  getAllTours,
  getTourById,
  updatedTour,
  deleteTour,
  createTourType,
  getAllTourTypes,
  updateTourType,
  deleteTourType,
};
