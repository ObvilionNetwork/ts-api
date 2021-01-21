import * as path from "path";
import * as fs from "fs";

const RouteLoader = () => {
    const routes = []
    const files = fs.readdirSync('./dist/routes/')

    const jsfiles = files.filter((file) => file.split('.').pop() === 'js')
    if (!jsfiles) {
        return console.log('Routes not found!')
    }

    jsfiles.forEach((file) => {
        const controller = require(path.join(__dirname, '..', 'routes', file)).default
        const router = new controller()

        routes.push(router)
    });

    return routes;
}

export default RouteLoader
