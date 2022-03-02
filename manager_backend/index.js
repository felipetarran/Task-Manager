// import express
import express from "express";
// import cors
import cors from "cors";

import { createRequire } from "module";
const require = createRequire(import.meta.url);
 
const bodyParser = require('body-parser');

require("dotenv-safe").config();
const jwt = require('jsonwebtoken');
 
// import routes
import Router from "./routes/routes.js";

//import db
import db from './config/database.js'
  
// init express
const app = express();
  
// use express json
app.use(express.json());
  
// use cors
app.use(cors());
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
  
// use router
app.use(Router);

function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
	console.log(token)
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) return res.status(500).json({ auth: false, message: 'Failed to authenticate token.' });
      
      // se tudo estiver ok, salva no request para uso posterior
      req.userId = decoded.id;
      next();
    });
}

app.post('/api/login', (req, res, next)=>{
    let username = req.body.username;
	let password = req.body.password;
    if (username && password) {
		// Execute SQL query that'll select the account from the database based on the specified username and password
		db.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], function(error, results, fields) {
			// If there is an issue with the query, output the error
			if (error) throw error;
			// If the account exists
			if (results.length > 0) {
				let id = results[0].id
                const token = jwt.sign({ id }, process.env.SECRET, {
                    expiresIn: 1500
                });
                return res.json({ auth: true, token: token });
			} else {
				res.send('Incorrect Username and/or Password!');
                res.sendStatus(401)
			}			
			res.end();
		});
    }else {
		res.send('Please enter Username and Password!');
		res.end();
	}    
})

app.post('/api/logout', function(req, res) {
    res.json({ auth: false, token: null });
	console.log('logged out')
})

app.get('/api/auth', verifyJWT, (req, res, next)=>{
	console.log('authorizated')
	res.send('Authorized')
})

app.listen(5001, () => console.log('Server running at http://localhost:5001'));