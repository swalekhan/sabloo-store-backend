const express = require("express")
const productsController = require("./mongoose/productsController")
const cors = require("cors")

const server = express()
server.use(express.json())
server.use(cors())

server.get("/", productsController.getAll)
server.get('/productDetail/:id',productsController.getById)
server.get("/products/:name",productsController.getProducts)
server.get("/search/:query", productsController.search)

server.put("/", (req, res) => { })
server.post("/", (req, res) => { })
server.listen(8080, () => {
    console.log(`Example app listening on port`)
})