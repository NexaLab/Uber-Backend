const authService = require("../services/AuthService");






module.exports = {



    signUp: async (req, res, next) => {

        authService.signUp(req, res, next);

    }
}