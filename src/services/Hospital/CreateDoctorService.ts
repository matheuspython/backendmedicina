import { prisma } from "../../prisma/index";
import { DoctorProps } from "../../types/DoctorsTypes";
import { CreateUserService } from "../user/CreateUserService";

class CreateDoctorService {
  async execute({
    email,
    password,
    cnpj,
    especialidades,
    nome,
  }: DoctorProps) {
    const doctor = await prisma.doctors.create({
      data: {
        email,
        password,
        cnpj,
        especialidades,
        nome,
      },
    });
    return doctor;
  }
}

export { CreateDoctorService };