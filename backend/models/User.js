import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true},
});

userSchema.statics.findByCredentials = async function(username, password) {
    const user = await this.findOne({username});

    if (!user) {
        throw new Error("Invalid username.");
    }

    const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error("Invalid password.");
        }

    return user;
}

const User = mongoose.model("User", userSchema);

export default User;