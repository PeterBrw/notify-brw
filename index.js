const path = require('path')
const fs = require('fs');


const express = require('express')
const dotenv = require('dotenv')
const compression = require('compression')
const morgan = require('morgan')
const cors = require('cors')

dotenv.config()

const accessLogStream = fs.createWriteStream(
    path.join(__dirname, 'access.log'),
    { flags: 'a' }
  )

const homeRoutes = require('./routes/home')

const app = express();
const port = process.env.PORT || 3000;

app.use(compression())
app.use(morgan('combined', { stream: accessLogStream }))

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cors())


app.use(express.static(path.join(__dirname, 'public')))


app.use(homeRoutes)

app.use('*', (req, res, next) => {
    res.send('404! Go Home!')
});

app.listen(port, () => console.log(`Example app listening on port ${port}`))