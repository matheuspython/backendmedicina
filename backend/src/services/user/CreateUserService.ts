import { prisma } from "../../prisma/index";
import { userProps } from "../../types/UserTypes";

class CreateUserService {
  async execute({
    email,
    password,
    nome
  }: userProps) {
    const user = await prisma.user.create({
      data: {
        email,
        password,
        nome
      },

    });
    return user;
  }
}

export { CreateUserService };