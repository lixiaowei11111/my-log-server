import { Router } from 'express'

import userController from '../controllers/user.controller'


const userRoutes = Router()


// 通过访问路由进入 controller层逻辑,controller根据业务逻辑决定是否有对应的Service层,是否访问Model层
userRoutes.get('/login', userController.login)// login方法相当于一个router-level 中间件
userRoutes.all("/sso", userController.redirect)
userRoutes.get("/synchErrorHandle", userController.synchErrorHandle)// 同步异常会被express捕获
userRoutes.get("/asynchErrorHandle", userController.asynchErrorHnadle)// 异步异常需要通过next来传递//express 5可以自动捕获
userRoutes.get("/promsieErrorHnadle", userController.promiseResolveHandle)// 异步错误需要通过next来传递
export default userRoutes