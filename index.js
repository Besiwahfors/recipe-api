import express from "express";
import recipesRoutes from "./routes/recipes.routes.js";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//local env variables
dotenv.config({path:[".env.local"]});

//create express app
const app = express();

// Apply middlewares
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
app.use(express.static("uploads"));


//use routes
app.use("/recipes",recipesRoutes);

//Make database coneection
await mongoose.connect(process.env.MONGO_URI);

//listen for incoming requests
const port=process.env.PORT ||4000;
app.listen(port, () => {
  console.log(`Express App is running on port ${port}`);
});
