const userService = require("../services/UserService");
const bcrypt = require("bcryptjs");
const BadRequestException = require("../exceptions/BadRequestException");
const GenericResponse = require("../dto/GenericResponse");





module.exports = {



    signUp: async (req, res, next) => {


        if (
            req.body.email == null ||
            req.body.email.length < 0 ||
            req.body.password == null ||
            req.body.password.length < 0
        ) {


            next(new BadRequestException("Email or Password can't be null or empty"));

        }


        else {


            req.body.password = await bcrypt.hash(req.body.password, 10);
            const userData = await userService.saveUser(req, res, next);
            return res.send(new GenericResponse("User has been signed up successfully", userData));

        }
    }
}