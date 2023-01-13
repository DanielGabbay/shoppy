import {UserRepository} from "../repository/user.repository";
import APILogger from "../logger/api.logger";

export class UserService {
    private userRepository: UserRepository;
    private logger: APILogger;

    constructor() {
        this.logger = new APILogger();
        this.userRepository = new UserRepository();
    }

    async getUsers() {
        this.logger.info('Service: getUsers', null);
        return await this.userRepository.getUsers();
    }

    async postUser(user: any) {
        return await this.userRepository.postUser(user);
    }

    async putUser(user: any) {
        return await this.userRepository.putUser(user);
    }

    async deleteUser(userId: string) {
        return await this.userRepository.deleteUser(userId);
    }
}
