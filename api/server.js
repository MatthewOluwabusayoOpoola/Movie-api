const express = require("express")
const app = express();
const mongoose = require ("mongoose");
const dotenv = require("dotenv")
const authRoute = require("./route/auth")
const userRoute = require("./route/user")
const movieRoute = require("./route/movie")
const listRoute = require("./route/list")


dotenv.config(); 

// db connection
mongoose
.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    
})
.then(()=>console.log("DB Connection Successfull!"))
.catch((err) => console.log(err));

// Middleware 
app.use(express.json())
app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);
app.use("/api/list", listRoute);

// listener
app.listen (8000, () => {
    console.log(("Backend server is running!"));
})