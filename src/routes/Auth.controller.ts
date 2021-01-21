import * as express from 'express'
import { Request, Response } from 'express'
import ControllerBaseInterface from 'interfaces/ControllerBase.interface'
import ErrorHandler from "../utils/ErrorHandler.util";

class AuthController implements ControllerBaseInterface {
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
