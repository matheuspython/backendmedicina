import { prisma } from "../../prisma";

export class GetUsersForLoginService {
  async execute() {
    const usersList = await prisma.user.findMany();
    console.log(usersList)
    return usersList;
  }
}
