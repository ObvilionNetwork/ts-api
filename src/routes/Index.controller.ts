import * as express from 'express'
import { Request, Response } from 'express'
import ControllerBaseInterface from 'interfaces/ControllerBase.interface'
import ErrorHandler from "../utils/ErrorHandler.util";

class IndexController implements ControllerBaseInterface {
    public path = '/'
    public router = express.Router()

    constructor() {
        this.router.get(this.path, ErrorHandler((req: Request, res: Response) => {
            req.res.json({
                message: "nufssll"
            })
        }))
    }
}

export default IndexController
