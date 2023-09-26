import { Router } from 'express'

import userController from '../controllers/user.controller'


const userRoutes = Router()


// 通过访问路由进入 controller层逻辑,controller根据业务逻辑决定是否有对应的Service层,是否访问Model层
userRoutes.get('/login', userController.login)
userRoutes.all("/sso", userController.redirect)

export default userRoutes