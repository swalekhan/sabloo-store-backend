const express = require("express")
const productsController = require('./controller/productsController')
const cart = require("./controller/cart")
const cors = require("cors")

const server = express()
server.use(express.json())
server.use(cors())

// ..........products..........................
server.get("/", productsController.getAll)
server.get('/productDetail/:id',productsController.getById)
server.get("/products/:name",productsController.getProducts)
server.get("/search/:query", productsController.search)

// ...............cart............
server.post("/cart/:userId",cart.addCartItems)
server.get("/cart/:userId",cart.getCartItems)
server.put("/cart/:userId",cart.putCartItems)
server.listen(8080, () => {
    console.log(`Example app listening on port`)
})