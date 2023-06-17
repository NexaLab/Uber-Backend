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






    getUser(userEmail) {




        const query = "SELECT * from users where user_email = ?  ";


        return new Promise((resolve, reject) => {


            db.query(query, userEmail, (error, result) => {



                if (error) {

                    return

                }


                else {

                    resolve(result);

                }
            })
        })
    }


}



module.exports = new UserRepo;