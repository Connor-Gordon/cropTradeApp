const express = require('express')
const Router = express.Router()
const conn = require('../utils/db')

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
  const sql = 'SELECT * FROM posts LEFT JOIN users WHERE id = ?'
  conn.query (sql, [id], (err, results, fields)=>{
    res.json(results)
  })
})

 //single category page
Router.get('/posts/:category/:id', (req, res, next) =>{
  let id = req.params.id
  // const sql = 'SELECT photo, title, description FROM posts LEFT JOIN categories ON categories.id = posts.parent_id WHERE categories.id = ?'

  const sql = `select p.title, p.description, p.id, c.parent_id as parent_id
  from posts p 
  left join categories c ON p.cat_id = c.id
  where p.cat_id = ? or c.parent_id = ?`
  
  conn.query (sql, [id, id], (err, results, fields) =>{
    res.json(results)
  })
})

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
  const sql = `SELECT * FROM users WHERE username = ?`

  conn.query(sql, [username], (err, results, fields) => {
    res.json(results)
  })
})


// // chat room creation
//                                        may have to use username
//   Router.get('/chat/:post_id/:poster_id/:user_id', (req, res, next) => {
//     // looking for what we named in url
//     let post_id = req.params.post_id
//     let user_id = req.params.user_id
//     const sql = `SELECT * FROM posts
//                 LEFT JOIN users on posts.user_id = ? and users.id = ?`
//     conn.query (sql, [post_id, user_id], (err, results, fields) => {
//       res.json(results)
//     })
//   })




 // Select * from posts left join posts on users Where id = ?
  // will bring in the user id to the post for us to create chat/direct message
  // can also use to display post info in chat

  


// post message
// Insert into messages join users on creator_id and user id

// get message
// Select * from messages join users where creator_id = userid && recipient_id = userid

// purely and example

// Router.get('/posts/:category/:id', (req, res, next) =>{
//   let id = req.params.id
//   // const sql = 'SELECT photo, title, description FROM posts LEFT JOIN categories ON categories.id = posts.parent_id WHERE categories.id = ?'

//   const sql = `select p.title, p.description, p.id, c.parent_id as parent_id
//   from posts p 
//   left join categories c ON p.cat_id = c.id
//   where p.cat_id = ? or c.parent_id = ?`
  
//   conn.query (sql, [id, id], (err, results, fields) =>{
//     res.json(results)
//   })
//subcategories-posts


Router.get('/:posts/:id', (req, res, next) =>{
  let id = req.params.id
  const sql = 'SELECT * FROM posts WHERE cat_id = ?'

  conn.query (sql, [id], (err, results, fields)=>{
    
    res.json(results)
  })
})

module.exports = Router