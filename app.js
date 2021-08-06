// set packages used in the project
const express = require('express')
const app = express()
const exphbs = require('express-handlebars')

// set service port
const port = 3000

// set variables
const restaurantList = require('./restaurant.json')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set static file
app.use(express.static('public'))

// set home route
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

// set show restaurant detail
app.get('/restaurants/:restaurant_id', (req, res) => {
  console.log(req.params.restaurant_id)
  const restaurnt = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)
  res.render('show', { restaurant: restaurant })
})

// set searching restaurant
app.get('/search', (req, res) => {
  const keyword = req.query.keyword.toLowerCase()

})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`server running https://localhost:${port}`)
})