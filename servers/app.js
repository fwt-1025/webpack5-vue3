const express = require('express')
const fs = require('fs')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({}))
app.use(bodyParser.urlencoded({}))
app.use(express.static('dist'))
app.get('*', (req, res) => {
    let html = fs.readFileSync(path.resolve(__dirname, 'dist', 'index.html'), 'utf-8')
    res.send(html)
})

app.listen(10600, () => {
    console.log('Your application is running at 0.0.0.0:10600')
})