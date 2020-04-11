import { model, Schema } from "mongoose";

const UserSchema = new Schema(
    {
        email: {type:String, required:true, unique:true},
        password: {type:String, required:true},
        image: {type:String, required:true}
    },
    {timestamps: true}
);

export default model('users', UserSchema);