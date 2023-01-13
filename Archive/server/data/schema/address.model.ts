import {Schema} from "mongoose";

export type Address = {
    street: string;
    city: string;
    country: string;
    zip: number;
}

export const AddressSchema: Schema = new Schema({
    street: {type: String, required: true},
    city: {type: String, required: true},
    country: {type: String, required: true},
    zip: {type: Number, required: true}
})
