const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.redirect('/index.html')
})

app.post('/signin', (req, res) => {
    res.send('Вход выполнен!')
})

app.post('/signup', (req, res) => {
  res.send('Егорка молодчинка!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})