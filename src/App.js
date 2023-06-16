const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const error = require("./middlewares/ErrorHandler");








require('dotenv').config()








//    **********      Database Connected         **********





require("./db-connection/DbConnection");









//***************************App uses*************************









app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());








app.use(cors({
    origin: '*'         // allow requests from this domain
}));










//***************************All Routes************************** */


const authRouter = require("./routes/AuthRoute");


app.use("", authRouter)






app.get("/api/hello", (req, res) => {

    res.send("App Running");

});
















const port = process.env.PORT || 3001;





app.listen(port, () => {

    console.log("App listening on port 3001");


});

app.use(error);