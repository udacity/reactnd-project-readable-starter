require('dotenv').config()

const express = require('express')
// const bodyParser = require('body-parser')
const cors = require('cors')
const config = require('./config')


const app = express()

app.use(express.static('public'))
app.use(cors())

let routes = require('./routes');
routes(app);

app.listen(config.port, () => {
  console.log('Server listening on port %s, Ctrl+C to stop', config.port)
})
