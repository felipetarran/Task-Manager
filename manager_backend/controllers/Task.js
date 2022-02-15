import { getTasks, getTaskById, insertTask, updateTaskById, deleteTaskById } from '../Models/taskModel.js';

// Get all Tasks
export const showTasks = (req, res) => {
    getTasks((err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Get Single Task
export const showTaskById = (req, res) => {
    getTaskById(req.params.id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Create New Task
export const createTask = (req, res) => {
    const data = req.body;
    insertTask(data, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Update Task
export const updateTask = (req, res) => {
    const data  = req.body;
    const id    = req.params.id;
    updateTaskById(data, id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}

// Delete Task
export const deleteTask = (req, res) => {
    const id = req.params.id;
    deleteTaskById(id, (err, results) => {
        if (err){
            res.send(err);
        }else{
            res.json(results);
        }
    });
}