import express from "express";

import { showTasks, showTaskById, createTask, updateTask, deleteTask } from '../controllers/Task.js';

import { showUsers, createUser } from "../controllers/User.js";


const router = express.Router();

// Tasks routes

router.get('/tasks', showTasks);

router.get('/tasks/:id', showTaskById);

router.post('/tasks', createTask);

router.put('/tasks/:id', updateTask);

router.delete('/tasks/:id', deleteTask);

// User routes

router.get('/user', showUsers);

router.post('/user', createUser);

export default router;