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
  const sql = 'SELECT * FROM posts WHERE id = ?'
  
  conn.query (sql, [id], (err, results, fields)=>{
    res.json(results[0])
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
  const sql = 'INSERT INTO posts (photo, title, description, cat_id) VALUES (?, ?, ?, ?)'

  const values = [req.body.photo, req.body.title, req.body.description, req.body.id,]

  conn.query(sql, values, (err, results, fields)=>{
    console.log(results)
    res.json({message: 'New Post Added'})
  })
})



//search bar
Router.get('/search/:searchResults', (req, res, next) =>{
  let searchResults = '%' + req.params.searchResults + '%'
  const sql = `SELECT * FROM posts WHERE description LIKE ? OR title LIKE ?`

  conn.query(sql, [searchResults, searchResults], (err, results, fields)=>{
    console.log(results)
    res.json(results)
  })
})

//subcategories-posts
Router.get('/:posts/:id', (req, res, next) =>{
  let id = req.params.id
  const sql = 'SELECT * FROM posts WHERE cat_id = ?'

  conn.query (sql, [id], (err, results, fields)=>{
    
    res.json(results)
  })
})



module.exports = Router