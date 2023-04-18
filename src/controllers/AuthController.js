const authService = require("../services/AuthService");






module.exports = {



    login: async (req, res, next) => {

        authService.login(req, res, next);

    }
}