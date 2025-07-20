import { catchAsync } from "../../utils/catchAsync";
import { sendResponse } from "../../utils/sendResponse";
import { TourService } from "./tour.service";
import { Request, Response } from "express";

const createTour = catchAsync(async (req: Request, res: Response) => {
  const result = await TourService.createTour(req.body);

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Tour created successfully",
    data: result,
  });
});

const getAllTours = catchAsync(async (req: Request, res: Response) => {
  // const query = req.query;
  const result = await TourService.getAllTours();
  console.log("tour cont", result);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tours retrieved successfully",
    data: result,
    // meta: result.meta,
  });
});

// updata Tour
const updateTour = catchAsync(async (req: Request, res: Response) => {
  const result = await TourService.updatedTour(req.params.id, req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tour updated successfully",
    data: result,
  });
});
//delete tour
const deleteTour = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TourService.deleteTour(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tour deleted successfully",
    data: result,
  });
});
//delete tour
const getTourById = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TourService.getTourById(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tour deleted successfully",
    data: result,
  });
});

// create Tour Type
const createTourType = catchAsync(async (req: Request, res: Response) => {
  console.log("tour con", req.body);
  const { name } = req.body;
  const result = await TourService.createTourType({ name });

  sendResponse(res, {
    statusCode: 201,
    success: true,
    message: "Tour type created successfully",
    data: result,
  });
});
const getAllTourTypes = catchAsync(async (req: Request, res: Response) => {
  const result = await TourService.getAllTourTypes();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tour types retrieved successfully",
    data: result,
  });
});

//update tour type
const updateTourType = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const { name } = req.body;
  const result = await TourService.updateTourType(id, name);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tour type updated successfully",
    data: result,
  });
});
// deleteTourType
const deleteTourType = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TourService.deleteTourType(id);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Tour type deleted successfully",
    data: result,
  });
});

export const TourController = {
  createTour,
  getAllTours,
  getTourById,
  updateTour,
  deleteTour,
  createTourType,
  getAllTourTypes,
  updateTourType,
  deleteTourType,
};
