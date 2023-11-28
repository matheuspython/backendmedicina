import { prisma } from "../../prisma";

export class GetDoctorsrsForLoginService {
  async execute() {
    const DoctorList = await prisma.doctors.findMany();
    console.log(DoctorList)
    return DoctorList;
  }
}
