import { Request, Response } from "express";
import { GetUsersForLoginService } from "../../services/user/getUsersForLoginService";
// import { userProps } from "../../types/UserTypes";

export class getUsersForLoginController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const service = new GetUsersForLoginService();
    const result = await service.execute();
    let resultOfLogin = false;
    let userData = undefined
    console.log(result)
    result.forEach(value => {
      if (value.email === email && value.password === password) {
        resultOfLogin = true;
        userData = value
        userData.password = ''
      }
    });

    return response.json({
      loginExiste: resultOfLogin,
      userData
    });
  }
}
