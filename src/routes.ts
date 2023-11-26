import { Router } from "express";
import { CreateUserController } from './controllers/user/CreateUserController'
import { getUsersForLoginController } from './controllers/user/getUsersForLoginController'
const router = Router();


router.post("/login", new CreateUserController().handle);
router.get("/autenticacao", new getUsersForLoginController().handle);
console.log('oie')
export { router };