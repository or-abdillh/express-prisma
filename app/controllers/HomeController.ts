import { Request, Response } from "express"

class HomeController {

    public index(req: Request, res: Response): void {
        res.json('Hello world from your server')
    }
}

export default HomeController