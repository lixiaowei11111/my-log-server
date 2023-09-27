import fs from 'node:fs'

import { NextFunction, Request, Response } from "express";// 第三方自定义模块

import BaseController from "./base.controller";// 文件模块

class UserController extends BaseController {
  public async login (req: Request, res: Response, _next: NextFunction): Promise<Response<string>> {
    console.log("requestTime", req.requestTime);// 获取请求时间戳

    return res.json("TOKEN")
  }

  public async redirect (_req: Request, res: Response) {
    res.redirect(301, "http://10.219.16.59/#/crm/customer")
  }

  public synchErrorHandle () {
    throw new Error("runtime Exception")// express 会自动捕获到同步异常 // 异步异常需要使用next(err)来传递
  }

  public asynchErrorHnadle (_req: Request, res: Response, next: NextFunction) {
    // asynch exception must use next pass err
    fs.readFile("/file-doss-not-exist", (err, data) => {
      if (err) {
        next(err)
      } else {
        res.send(data)
      }
    })
  }

  public promiseEjectHandle () {
    Promise.resolve().then(() => {
      throw new Error("Promsie then inside throw error ")
    })
  }
}

export default new UserController()