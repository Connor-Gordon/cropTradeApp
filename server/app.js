import express from 'express'
import bodyParser from 'body-parser'
import Router from './routes/index'
import AuthRouter from './routes/auth'
const app = express()

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())



// this is where all your issues keep coming from
app.use('/api', AuthRouter)
app.use('/api',  Router)
// router for authorization


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found')
  err.status = 404
  next(err)
})

// catch 500 error
app.use(function(err, req, res, next) {
  res.status(err.status || 500)
  res.json({
    message: err.message,
    error: err
  })
})

export default app