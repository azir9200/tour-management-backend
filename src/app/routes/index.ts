import { Router } from "express";
import { UserRoutes } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/auth/auth.route";
<<<<<<< HEAD
import { DivisionRoutes } from "../modules/division/division.route";
=======
>>>>>>> passport
import { TourRoutes } from "../modules/tour/tour.route";

export const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
<<<<<<< HEAD
  {
    path: "/division",
    route: DivisionRoutes,
  },
=======
  // {
  //   path: "/division",
  //   route: DivisionRoutes,
  // },
>>>>>>> passport
  {
    path: "/tour",
    route: TourRoutes,
  },
];
moduleRoutes.forEach((route) => {
  router.use(route.path, route.route);
});
