import App from './App'
import * as bodyParser from 'body-parser'
import RouteLoader from "./utils/RouteLoader.util";

const controllers = RouteLoader()

const app = new App({
    port: 5050,
    controllers,
    middleWares: [
        bodyParser.json(),
        bodyParser.urlencoded({ extended: true })
    ]
})

app.listen()
