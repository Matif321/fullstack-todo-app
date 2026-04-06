import express from "express"
import { createTodo, } from "../controller/modelController.js";


const router = express.Router();


router.post("/create", createTodo);
// router.get("/get", getTodo)


export default router;