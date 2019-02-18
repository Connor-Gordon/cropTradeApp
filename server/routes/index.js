const express = require('express')
const Router = express.Router()
const conn = require('../utils/db')


///// categories and postings ///////////////////////////////

//categories page

Router.get('/categories', (req, res, next) => {
  const sql = 'SELECT * FROM categories'
  let data = {
    title: 'Home'
  }
  conn.query(sql, (err, results, fields) => {
    data.categories = results.filter(result => result.parent_id === null)
    data.categories.map(cat => {
      let subcat = results.filter(result => {
        if(result.parent_id === cat.id){
          return result
        }
      })
      cat.subcat = subcat
    })
    res.json( data)
  })  
})


//single post page

Router.get('/post/:id', (req, res, next) =>{
  let id = req.params.id
  const sql = 'SELECT * FROM posts WHERE id = ?'
  conn.query (sql, [id], (err, results, fields)=>{
    res.json(results[0])
  })
})

// remove post

Router.put('/post/:id', (req,res,next) => {
  let id = req.params.id
  const sql = `UPDATE posts SET is_active = 1 WHERE posts.id = ? `
  conn.query (sql, [id], (err, results, fields)=> {
    res.json(results)
  })
})

 //single category page

Router.get('/posts/:category/:id', (req, res, next) =>{
  let id = req.params.id
  const sql = `select p.title, p.description, p.id, c.parent_id as parent_id
  from posts p 
  left join categories c ON p.cat_id = c.id
  where p.cat_id = ? or c.parent_id = ? AND p.is_active = 0`
  conn.query (sql, [id, id], (err, results, fields) =>{
    res.json(results)
  })
})




////////// post new listing, search, and profile data /////////////////////

//add a new post page 

Router.post('/form', (req, res, next)=>{
  const sql = 'INSERT INTO posts (photo, title, description, cat_id, fresh_by) VALUES (?, ?, ?, ?, ?)'
  const values = [req.body.photo, req.body.title, req.body.description, req.body.id, req.body.fresh_by]
  conn.query(sql, values, (err, results, fields)=>{
    res.json({message: 'New Post Added'})
  })
})



//search bar

Router.get('/search/:searchResults', (req, res, next) =>{
  let searchResults = '%' + req.params.searchResults + '%'
  const sql = `SELECT * FROM posts WHERE description LIKE ? OR title LIKE ?`
  conn.query(sql, [searchResults, searchResults], (err, results, fields)=>{
    res.json(results)
  })
})


// pull profile data

Router.get('/profile/:username', (req, res, next) => {
  let username = req.params.username
  const sql = `Select  u.*, p.*
                from users u 
                left join posts p
                on u.id = p.user_id
                where u.username = ?`

  conn.query(sql, [username], (err, results, fields) => {
    res.json(results)
  })
})



/////////// messaging //////////////////////////////////

// post message to message database

Router.post('/chatroom/:receiver_id/:user_id', (req, res, next) => {

  const sql = `INSERT INTO messages (receiver_id, message, sender_id) VALUES (?, ?, ?)`
  
  const values = [req.params.receiver_id, req.body.message, req.params.user_id]
  conn.query(sql, values, (err, results, fields) => {
    res.json({message: 'Message Sent'})
  })
})


// get messages

Router.get('/chatroom/:receiver_id/:user_id', (req, res, next) => {
  let receiver_id = req.params.receiver_id
  let sender_id = req.params.user_id

  const sql = `SELECT * 
              FROM messages 
              LEFT JOIN users on messages.sender_id = users.id
              WHERE messages.receiver_id = ? AND messages.sender_id = ?`

  conn.query(sql, [receiver_id, sender_id], (err, results, fields) => {
    res.json(results)
  })
})


// work on this

// // gets new messages for inbox page

// Router.get('/inbox/:user_id/', (req, res, next) => {
//   let user_id = req.params.user_id
//   const sql = `SELECT *
//               FROM messages
//               LEFT JOIN users on messages.sender_id = users.id
//               WHERE messages.receiver_id = ? and messages.sender_id = ?`
// })




/////// subcategories, needs to be at bottom so doesnt overide other paths ///////////////////

// subcategories

Router.get('/:posts/:id', (req, res, next) =>{
  let id = req.params.id
  const sql = 'SELECT * FROM posts WHERE cat_id = ? AND is_active=0'

  conn.query (sql, [id], (err, results, fields)=>{
    
    res.json(results)
  })
})

module.exports = Router