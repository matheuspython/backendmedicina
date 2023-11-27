import { prisma } from "../../prisma";

export class GetDoctorsrsForLoginService {
  async execute() {
    const DoctorList = await prisma.user.findMany();

    return DoctorList;
  }
}
