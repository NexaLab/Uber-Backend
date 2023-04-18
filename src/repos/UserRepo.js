const db = require("../db-connection/DbConnection");



class UserRepo {
    
  getUser(email) {
    return new Promise((resolve, reject) => {
      db.query(
        "select * from users where user_email =  ? ",
        email,
        (error, result) => {
          if (error) {
            console.log(error);
          } else {
            resolve(result);
          }
        }
      );
    });
  }
}

module.exports = new UserRepo();
