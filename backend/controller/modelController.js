// 

import Model from "../model/todoModel.js";

// Create Todo
export const createTodo = async (req, res) => {
    try {
        const { title } = req.body;

        if (!title) {
            return res.status(400).json({
                success: false,
                message: "Title is required"
            });
        }

        const newTodo = new Model({ title });
        await newTodo.save();

        res.status(201).json({
            success: true,
            message: "Todo created successfully",
            data: newTodo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};


// // Get All Todos
// export const getTodo = async (req, res) => {
//     try {
//         const todos = await Model.find();

//         res.status(200).json({
//             success: true,
//             data: todos
//         });

//     } catch (error) {
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });
//     }
// };