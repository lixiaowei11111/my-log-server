import { NextFunction, Request, Response } from "express";

import BaseController from "./base.controller";

class UserController extends BaseController {
  public async login (req: Request, res: Response, _next: NextFunction): Promise<Response<string>> {
    console.log("requestTime", req.requestTime);// 获取请求时间戳

    return res.json("TOKEN")
  }

  public async redirect (_req: Request, res: Response) {
    res.redirect(301, "http://10.219.16.59/#/crm/customer")
  }
}

export default new UserController()