const express = require("express");
const cors = require("cors");
const bodyParser = require('body-parser');
const error = require("./middlewares/ErrorHandler");







// **************************        env file config            ******************************




require('dotenv').config()








//    **********      Database Connected         **********





require("./db-connection/DbConnection");






const port = process.env.PORT || 3002;







// ***************             Utilizing all CPU cores          *********************           




const os = require("os");
const cluster = require("cluster");







const cpuNumberOfCores = os.cpus().length;




// if (cluster.isPrimary) {


//     for (let cpuCore = 0; cpuCore < cpuNumberOfCores; cpuCore++) {

//         cluster.fork();

//     }


//     cluster.on("exit", () => {

//         cluster.fork();

//     })
// }



// else {



const app = express();





//***************************App uses*************************





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));








app.use(cors({
    origin: '*'         // allow requests from this domain
}));








//************************************************************** */




const authRoute = require("./routes/AuthRoute");




app.use("", authRoute);






app.get("/api/hello", (req, res) => {

    res.send("App Running 3002");

});




app.get("/api/heavy", (req, res) => {

    setTimeout(() => {
        res.send("YES BACK");
    }, 8000);

});





app.listen(port, () => {

    console.log("App listening on port 3002");

});




app.use(error);


// }












