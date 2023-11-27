import { Router } from "express";
import { CreateUserController } from './controllers/user/CreateUserController'
import { getUsersForLoginController } from './controllers/user/getUsersForLoginController'
import { CreateDoctorController } from "./controllers/Hospital/CreateDoctorController";
import { getDoctorsForLoginController } from "./controllers/Hospital/getDoctorsForLoginController";
const router = Router();


router.post("/createNewUser", new CreateUserController().handle);
router.get("/loginUser", new getUsersForLoginController().handle);
router.post("/createNewDoctor", new CreateDoctorController().handle);
router.post("/loginDoctor", new getDoctorsForLoginController().handle);

export { router };