import express from "express"
import { createTodo, getTodo, updateTodo } from "../controller/modelController.js";


const router = express.Router();


router.post("/create", createTodo);
router.get("/get", getTodo)
router.put("/update", updateTodo)


export default router;