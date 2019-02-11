// api to sign in

import express from 'express'
import conn from '../utils/db'

// set express router to the constant 'Router'
const Router = express.Router()

// use express router to post to /login
Router.post('/login', (req, res, next)=>{
    // set this sql query to the constant 'sql' (scoped to this post)
    const sql = 'SELECT count(1) as count FROM users WHERE username = ? AND password = ?'
    // connect and run the sql query, pull the value for username and password from the affiliated fields in the body
    // also run the password through sha512 so its encrypted and send out the results as results
    conn.query(sql, [req.body.username, req.body.password], (err, results, fields) =>{
        // if the count comes back to us with more than 0, then valid
        const valid = results[0].count > 0
        // if valid
        if ( valid ) {
            // set the username with the jwt secret as token
            const token = {username: req.body.username,
                            password: req.body.password
            }

            // and send the token as response with a successful message
            res.json({
                message: 'Successful Login',
                token: token
            })
            // if not valid
        } else {
            // respond with 401 status error and bad username message
            res.status(401).json({
                message: 'Bad username or password'
            })
        }
    }) 
})


Router.post('/register', (req, res, next) => {
    console.log("authRoute post", res)
    const sql = 'INSERT INTO users (username, password) VALUES (?,?) '
    if (!res.body.username || !res.body.password){
        res.json(
            {
            message: 'Both username and password fields are required'
        })
    } else{
        conn.query(sql, [req.body.username, req.body.password], (err, results, fields) => {
            const token = {
                username: req.body.username,
                password: req.body.password
                }
            res.json({
                message: 'User registered successfully',
                token: token
            })
        })
    }   
})
 
export default Router