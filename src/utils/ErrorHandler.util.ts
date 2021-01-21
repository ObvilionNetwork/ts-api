import {Request, Response} from "express";

const ErrorHandler = (callback) => {
    return (req: Request, res: Response) => {
        try {
            callback(req, res)
        } catch (exception) {
            res.status(500).json({
                error: "Sorry, its an ErRoR :("
            })
        }
    }
}

export default ErrorHandler
