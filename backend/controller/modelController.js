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


// Get All Todos
export const getTodo = async (req, res) => {
    try {
        const todos = await Model.find();

        res.status(200).json({
            success: true,
            data: todos
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

export const updateTodo = async (req, res) => {
    try {
        const { id } = req.params;

        const updatedTodo = await Model.findByIdAndUpdate(
            id,
            req.body,
            { new: true }
        );

        if (!updatedTodo) {
            return res.status(404).json({
                success: false,
                message: "Todo not found"
            });
        }

        res.status(200).json({
            success: true,
            data: updatedTodo
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};