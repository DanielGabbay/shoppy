import express = require('express');
import * as bodyParser from 'body-parser';
import APILogger from "./logger/api.logger";
import {UserController} from "./controller/api.task.controller";

export const AppName = 'shoppy';

class App {
    public express: express.Application;
    public logger: APILogger;
    public userController: UserController;

    /** S: Swagger files */
    // private readonly swaggerBasePath = process.cwd() + '/swagger';
    // private swaggerFile: any = this.swaggerBasePath + '/swagger.json';
    // private swaggerData: any = JSON.parse(fs.readFileSync(this.swaggerFile, 'utf8'));
    // private customCss: any = fs.readFileSync(this.swaggerBasePath + '/swagger.css', 'utf8');
    // private swaggerDocument = JSON.parse(this.swaggerData);


    /** E:Swagger files */

    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.userController = new UserController();
    }

    /** Configure express middleware */
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }

    /** Configure express routes */
    private routes(): void {
        /** get all users*/
        this.express.get('/api/users', (req, res, next) => {
            this.logger.logRequest(req);
            this.userController.getUsers().then((data) => {
                res.json(data);
            }).catch((err) => {
                this.logger.error('Error: ', err);
                res.json(err);
            })
        });


        /** base app route */
        this.express.get('/', (req, res, next) => {
            res.send("App works!");
        });

        /** Swagger route */
        // this.express.get('/api/docs', (req, res, next) => {
        //     swaggerUi.setup(this.swaggerDocument, undefined, undefined, this.customCss);
        // });

        /** handle undefined routes  */
        this.express.use("*", (req, res, next) => {
            res.status(404).send('Not found');
        });

    }
}


export default new App().express;
