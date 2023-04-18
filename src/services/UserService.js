const GenericResponse = require("../dto/GenericResponse");
const userRepo = require("../repos/UserRepo");




module.exports = {
  getUser: async (req, res, next) => {
    const email = req.body.email;
    const user = await userRepo.getUser(email);
    return user;
  },
};
