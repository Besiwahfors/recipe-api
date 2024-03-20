import Express from "express";
import recipesRoutes from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

//local env variables
dotenv.config({path:[".env.local"]})

//create express app
const app = Express();

//use routes
app.use("/recipes",recipesRoutes)

//Make database coneection
await mongoose.connect(process.env.MONGO_URI);

//listen for incoming requests
app.listen(6000, () => {
  console.log(`Express App is running`);
});
