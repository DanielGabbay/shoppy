import APILogger from "../logger/api.logger";
import {UserModel} from "../data/schema/user.model";
import {getCollection} from "../config/db.config";
import {ShoppyCollection} from "../data/types/shoppy-collection";

export class UserRepository {
    private logger: APILogger;



    constructor() {

        this.logger = new APILogger()
    }

    async getUsers() {
        // const users = await UserModel.find({});
        const usersCollection = await getCollection(ShoppyCollection.Users);
        const users = usersCollection.find({});
        

        this.logger.info('users:::', users);
        return users;
    }


    async postUser(user: any) {
        let data = {};
        try {
            data = await UserModel.create(user);
        } catch (err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }


    async putUser(user: any) {
        let data = {};
        try {
            data = await UserModel.updateOne(user);
        } catch (err) {
            this.logger.error('Error::' + err);
        }
        return data;
    }


    async deleteUser(userId) {
        let data: any = {};
        try {
            data = await UserModel.deleteOne({_id: userId});
        } catch (err) {
            this.logger.error('Error::' + err);
        }
        return {status: `${(data.deletedCount > 0)}`};
    }
}
