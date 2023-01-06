import APILogger from "../logger/api.logger";
import {UserService} from "../services/user.service";


export class UserController {
    private userService: UserService;
    private logger: APILogger;

    constructor() {
        this.userService = new UserService();
        this.logger = new APILogger();
    }

    async getUsers() {
        this.logger.info('Controller: getUsers', null);
        return await this.userService.getUsers();
    }

    async postUser(user: any) {
        this.logger.info('Controller: postUser', user);
        return await this.userService.postUser(user);
    }

    async putUser(user: any) {
        this.logger.info('Controller: putUser', user);
        return await this.userService.putUser(user);
    }

    async deleteUser(userId: string) {
        this.logger.info('Controller: deleteUser', userId);
        return await this.userService.deleteUser(userId);
    }
}
