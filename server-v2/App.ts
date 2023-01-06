import express = require('express');
import * as bodyParser from 'body-parser';
import {DB} from "./config/db.config";
import {UsersService} from "./services/users.service";

const User = require('./model/user.model');

require('dotenv').config()


class App {
    public express: express.Application;
    public usersService: UsersService;

    constructor() {
        this.express = express();
        this.middleware();
        this.usersService = new UsersService();

        this.initDB().then(() => {
            this.initRoutes();
        });
    }

    iniUsersRoutes() {
        // get all users
        this.express.get('/api/users', (req, res, next) => {
            this.usersService.getAll().then((data) => {
                res.json(data);
            }).catch((err) => {
                res.json(err);
            });
        });
        // get user by id
        this.express.get('/api/users/:id', (req, res, next) => {
            this.usersService.get(req.params.id).then((data) => {
                res.json(data);
            }).catch((err) => {
                res.json(err);
            });
        });

        // create user
        this.express.post('/api/users', (req, res, next) => {
            this.usersService.create(req.body).then((data) => {
                res.json(data);
            }).catch((err) => {
                res.json(err);
            });
        });
        // update user
        this.express.put('/api/users/:id', (req, res, next) => {
            this.usersService.update(req.params.id, req.body).then((data) => {
                res.json(data);
            }).catch((err) => {
                res.json(err);
            });
        })
        // delete user
        this.express.delete('/api/users/:id', (req, res, next) => {
                    this.usersService.delete(req.params.id).then((data) => {
                        res.json(data);
                    }).catch((err) => {
                        res.json(err);
                    });
                }
        )
    }

    private initRoutes(): void {
        this.iniUsersRoutes();
    }

    private async initDB(): Promise<void> {
        await DB.connect();
    }


    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: false}));
    }


}


// Start the server

export default new App().express;


/**
 * סיום ביצוע קריאות למשתמשים כולל: יצירה, קבלה, עדכון ומחיקה
 */

/**in english:
 *
 * */
