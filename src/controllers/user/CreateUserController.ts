import { Request, Response } from "express";
import { CreateUserService } from "../../services/user/CreateUserService";
import { userProps } from "../../types/UserTypes";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const {
      password,
      email
    }: userProps = req.body;

    const service = new CreateUserService();

    const result = await service.execute({
      password,
      email
    });

    return res.json(result);
  }
}

export { CreateUserController };
