import { Express } from "express"
import HomeController from "@app/controllers/HomeController"

export default (app: Express) => {

    const homeController = new HomeController()

    app.get('/', homeController.index)
}