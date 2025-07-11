import { Router } from "express";
import { UserControllers } from "./user.controller";

const router = Router();

router.post("/register", UserControllers.createUser);

router.get("/", UserControllers.getAllUsers);

router.patch("/:id", UserControllers.updateUser);

export const UserRoutes = router;
