import db from '../config/database.js';

//Get all tasks
export const getTasks = (result) => {
    db.query("SELECT * FROM tasks", (err, results)=>{
        if(err){
            console.log(err);
            result(err, null);
        } else{
            result(null, results);
        }
    });
}

//Get single task
export const getTaskById = (id, result) => {
    db.query("SELECT * FROM tasks WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}

// Insert Task to Database
export const insertTask = (data, result) => {
    db.query("INSERT INTO tasks SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Update Task to Database
export const updateTaskById = (data, id, result) => {
    db.query("UPDATE tasks SET tarefa = ?, descricao = ?, minutos = ? WHERE id = ?", [data.tarefa, data.descricao,data.minutos, id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}

// Delete Task to Database
export const deleteTaskById = (id, result) => {
    db.query("DELETE FROM tasks WHERE id = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}