import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    require: [true, "Must enter a username"],
    unique: [true, "Username already in use"],
  },
 
});

const User = mongoose.model("User", userSchema);

export default User;