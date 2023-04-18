const db = require("../db-connection/DbConnection");




class UserRepo {




    saveUser(userData) {



        const query = "INSERT INTO users SET ? ";


        return new Promise((resolve, reject) => {


            db.query(query, userData, (error, result) => {


                if (error) {

                    console.log(error);

                }


                else {

                    resolve(userData);

                }
            })
        })
    }


}



module.exports = new UserRepo;