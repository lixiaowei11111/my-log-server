import express, { type Express } from 'express'

/* middleware */
import { myLogger, requestTime, cbMiddleware } from './middleware/myMiddleWare'

import rootRoutes from './routes'

const app: Express = express()
const port = parseInt(process.env.PORT!, 10) || 5000

/* middleware的加载有顺序区别 */
app.use(requestTime)
app.use("/api/", rootRoutes)
app.use(myLogger)
app.use(cbMiddleware({ foo: "xxxx" }))


const main = async (): Promise<void> => {
  try {
    app.listen(port, () => {
      console.log("Server running on the ", `http://localhost:${port}`);

    })
  } catch (error) {
    console.log(error)
  }
}
main()