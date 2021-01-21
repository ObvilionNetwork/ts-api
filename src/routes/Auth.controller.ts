import * as express from 'express'
import { Request, Response } from 'express'
import IControllerBaseInterface from 'interfaces/IControllerBase.interface'
import ErrorHandler from "../utils/ErrorHandler.util";

class AuthController implements IControllerBaseInterface {
    public path = '/auth/'
    public router = express.Router()

    constructor() {
        this.router.post(this.path + "signin", ErrorHandler((req: Request, res: Response) => {


            req.res.json({
                message: "nufssll"
            })
        }))

        this.router.post(this.path + "signup", ErrorHandler((req: Request, res: Response) => {


            req.res.json({
                message: "nufssll"
            })
        }))
    }
}

export default AuthController
