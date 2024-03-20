import { Router } from "express";

const router = Router();


//Define Route for POST
router.post("/",(req,res)=>{
    res.send('recipes created')
});

//Define Route for GET
router.get("/",(req,res)=>{
    res.send('Get all Recipes')
});

//Define Route for GET,by id
router.get("/recipes/:id",(req,res)=>{
    res.send('Get only a recipe')
});

//Define Route for PATCH,by id
router.patch("/recipes/:id",(req,res)=>{
    res.send('Patch only a recipe')
});

//Define Route for DELETE,by id
router.delete("/recipes/:id",(req,res)=>{
    res.send('Delete a recipe')
});

export default router;