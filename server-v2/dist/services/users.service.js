"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const User = require('../model/user.model');
class UsersService {
    getAll() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.find();
        });
    }
    get(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.findById(id);
        });
    }
    create(user) {
        return __awaiter(this, void 0, void 0, function* () {
            let newUser = new User(user);
            newUser._id = new mongoose_1.default.Types.ObjectId();
            return yield newUser.save().then((data) => {
                return data;
            }).catch((err) => {
                debugger;
                console.log(err);
            });
        });
    }
    update(id, user) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield User.findByIdAndUpdate(id, user, { new: true });
        });
    }
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            yield User.findByIdAndRemove(id);
        });
    }
}
exports.UsersService = UsersService;
//# sourceMappingURL=users.service.js.map