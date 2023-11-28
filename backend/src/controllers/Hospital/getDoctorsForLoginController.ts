import { Request, Response } from "express";
import { GetDoctorsrsForLoginService } from "../../services/Hospital/getDoctorsForLoginService";
// import { userProps } from "../../types/UserTypes";

export class getDoctorsForLoginController {
  async handle(request: Request, response: Response) {
    const { email, password } = request.body;
    const service = new GetDoctorsrsForLoginService();
    const result = await service.execute();
    let resultOfLogin = false;
    let userData = undefined
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
