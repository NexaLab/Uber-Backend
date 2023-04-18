const userRepo = require("../repos/UserRepo");


module.exports = {



    saveUser: async (req, res, next) => {



        const userData = {

            first_name: req.body.firstName,
            last_name: req.body.lastName,
            user_email: req.body.email,
            password: req.body.password,
            profile_pic: req.body.profilePic,
            phone_no: req.body.phoneNo,
            country: req.body.country,
            city: req.body.city
        }


        const response = await userRepo.saveUser(userData);
        return response;
    }

}