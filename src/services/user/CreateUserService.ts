import { prisma } from "../../prisma/index";
import { userProps } from "../../types/UserTypes";

class CreateUserService {
  async execute({
    email,
    password
  }: userProps) {
    const user = await prisma.user.create({
      data: {
        email,
        password,
      },
    });
    return user;
  }
}

export { CreateUserService };