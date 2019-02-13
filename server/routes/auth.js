// api to sign in

import express from 'express'
import conn from '../utils/db'
import sha512 from 'js-sha512'
import jwt from 'jsonwebtoken'
import config from 'config'
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
            const token = jwt.sign({username: req.body.username,
                            password: req.body.password
            }, config.get('jwtsecret'))

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


// WORKS WITH POSTMAN, DONT MESS WITH

Router.post('/register', (req, res, next) => {
    // console logs response to the terminal, see username and pw from inputs come through in res
    console.log("authRoute post", res)
    const sql = 'INSERT INTO users (username, password) VALUES (?,?) '
    if (!req.body.username || !req.body.password){
        res.json(
            {
            message: 'Both username and password fields are required'
        })
    } else{
        conn.query(sql, [req.body.username, req.body.password], (err, results, fields) => {
            const token = jwt.sign({
                username: req.body.username,
                password: req.body.password
                }, config.get('jwtsecret'))
            res.json({
                message: 'User registered successfully',
                token: token
            })
        })
    }   
})
 
export default Router