const express = require('express')
const app = express()
const morgan = require('morgan')
const path = require('path')



// ---------------------------------------------
app.use(morgan('dev'))



// ---------------------------------------------
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/01-home.html'))
})

app.get('/2', (req, res) => {
  res.sendFile(path.join(__dirname + '/pages/02-aboutUs.html'))
})





// ---------------------------------------------
app.listen((process.env.PORT || 3000), (err) => {
  if(err){ throw err }
  console.log("\n\n=========================\nServer Running....\n");
})
