import { Request, Response } from "express";
import { CreateDoctorService } from "../../services/Hospital/CreateDoctorService";
import { DoctorProps } from "../../types/DoctorsTypes";

class CreateDoctorController {
  async handle(req: Request, res: Response) {
    const {
      password,
      email,
      cnpj,
      especialidades,
      nome
    }: DoctorProps = req.body;

    const service = new CreateDoctorService();

    const result = await service.execute({
      password,
      email,
      cnpj,
      especialidades,
      nome
    });

    return res.json(result);
  }
}

export { CreateDoctorController };
