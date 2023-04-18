const userService = require("../services/UserService");
const bcrypt = require("bcryptjs");
const BadRequestException = require("../exceptions/BadRequestException");
const GenericResponse = require("../dto/GenericResponse");



module.exports = {
  login: async (req, res, next) => {
    if (
      req.body.email == null ||
      req.body.email.length == 0 ||
      req.body.password == null ||
      req.body.password.length == 0
    ) {
      next(new BadRequestException("Email or Password can't be null or empty"));
    } else {
      const isUserExist = await userService.getUser(req, res, next);

      console.log(isUserExist);

      if (isUserExist.length == 0) {
        next(new BadRequestException("User doesn't Exist. Please Sign Up."));
      } else {
        const recievePass = req.body.password;
        const dbPass = isUserExist[0].password;

        if (
          bcrypt
            .compare(recievePass, dbPass)
            .then((result) => {
              if (result == true) {
                return res.send(
                  new GenericResponse(
                    "User has been Logged In successfully",
                    null
                  )
                );
              } else {
                return res.send(
                  new GenericResponse("Your password doesn't match", null)
                );
              }
            })
            .catch((err) => console.log(err))
        ) {
        } else {
        }
      }
    }
  },
};
