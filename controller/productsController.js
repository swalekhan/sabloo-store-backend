require("../mongoose/config")
const products = require('../model/products')


exports.getAll = async (req, res) => {
    const data = await products.find({})
    res.send(data);
}

exports.getById = async (req, res) => {
    try {
        const id = req.params.id
        const data = await products.findById(id)
        res.status(200).json(data);
    } catch (err) {
        res.status(404).send(err)
    }
}


exports.getProducts = async (req, res) => {
    try {
       const {name} = req.params;
        const data = await products.find({
            $or: [
                { category: { $regex: name, $options: 'i' } },
                { subCategory: { $regex: name, $options: 'i' } },
                // { brand: { $regex: name, $options: 'i' } },
            ],
        });
        res.json(data);
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Internal server error' });
    }
}


exports.search = async (req, res) => {
    const { query } = req.params;
    try {
      const data = await products.find({
        $or: [
          { name: { $regex: query, $options: 'i' } },
          { category: { $regex: query, $options: 'i' } },
          { subCategory: { $regex: query, $options: 'i' } },
          { brand: { $regex: query, $options: 'i' } },
          { color: { $regex: query, $options: 'i' } },
        ],
      });
      res.json(data);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  };



// function searchController(req, res) {
//     // Extract search parameters from request (e.g. query, filters, pagination)
//     const { query, filters, page, pageSize } = req.query;
  
//     // Build and execute search query against database
//     db.search(query, filters, page, pageSize)
//       .then((results) => {
//         // Format results as necessary and send back to client
//         res.status(200).json(results);
//       })
//       .catch((err) => {
//         // Handle any errors that occurred during search and return error response
//         console.error(err);
//         res.status(500).json({ error: 'An unexpected error occurred.' });
//       });
//   }
  
//   module.exports = searchController;