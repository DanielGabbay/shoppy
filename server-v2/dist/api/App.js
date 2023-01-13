"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = __importStar(require("body-parser"));
const db_config_1 = require("../config/db.config");
const users_service_1 = require("../services/users.service");
require('dotenv').config();
class App {
    constructor() {
        this.express = express();
        this.middleware();
        this.usersService = new users_service_1.UsersService();
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
        });
        // delete user
        this.express.delete('/api/users/:id', (req, res, next) => {
            this.usersService.delete(req.params.id).then((data) => {
                res.json(data);
            }).catch((err) => {
                res.json(err);
            });
        });
    }
    initRoutes() {
        this.iniUsersRoutes();
    }
    initDB() {
        return __awaiter(this, void 0, void 0, function* () {
            yield db_config_1.DB.connect();
        });
    }
    middleware() {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }
}
exports.default = new App().express;
//# sourceMappingURL=App.js.map