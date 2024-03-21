import { Router } from "express";
import { addRecipe, deleteRecipe, getRecipe, getRecipes, updateRecipe } from "../controllers/recipes.controller.js";

const router = Router();


//Define Route for POST
router.post("/",addRecipe);

//Define Route for GET
router.get("/",getRecipes);

//Define Route for GET,by id
router.get("/recipes/:id",getRecipe);

//Define Route for PATCH,by id
router.patch("/recipes/:id",updateRecipe);

//Define Route for DELETE,by id
router.delete("/recipes/:id",deleteRecipe);

export default router;