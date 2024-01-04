import STATUS_CODE from "./statusCodes.js";
import User from "./users.js";

// Controller to get all users
export const getAllUsers = async (req, res, next) => {
  try {
    const users = await User.find({}).populate("posts");
    res.send(users);
  } catch (error) {
    next(error);
  }
};

// Controller to get a user by id
export const getUserById = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id).populate("posts");
    if (!user) {
      res.status(STATUS_CODE.NOT_FOUND);
      throw new Error("No such user in the database");
    }
    res.send(user);
  } catch (error) {
    next(error);
  }
};

// Controller to create a new user
export const createUser = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newUser = await User.create({ name });
    res.status(STATUS_CODE.CREATED).send(newUser);
  } catch (error) {
    next(error);
  }
};