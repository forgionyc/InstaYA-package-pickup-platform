import {Router} from "express";
import { deleteUser, getAllUsers, register, login } from "../controllers/authController.js";

const router = Router();

router.get("/getUsers", getAllUsers);

router.post("/register", register);

router.post("/login", login);

router.delete('/delete/:id', deleteUser);

export default router;