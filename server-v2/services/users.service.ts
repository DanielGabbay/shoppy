import {IUser} from "../model/user.model";
import mongoose from "mongoose";

const User = require('../model/user.model');

export class UsersService {

    public async getAll(): Promise<IUser[]> {
        return await User.find();
    }

    public async get(id: string): Promise<IUser> {
        return await User.findById(id);
    }

    public async create(user: IUser): Promise<IUser> {
        let newUser = new User(user);
        newUser._id = new mongoose.Types.ObjectId();


        return await newUser.save().then((data) => {
            return data;
        }).catch((err) => {
            debugger;
            console.log(err);
        });
    }


    public async update(id: string, user: IUser): Promise<IUser> {
        return await User.findByIdAndUpdate(id, user, {new: true});
    }

    public async delete(id: string): Promise<void> {
        await User.findByIdAndRemove(id)
    }
}
