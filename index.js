const express = require('express');
const knex = require('knex');
const helmet = require('helmet');
const server = express();
const morgan = require('morgan');
const cors = require('cors');


server.use(express.json());
server.use(cors());
server.use(helmet());
server.use(morgan());



const dbConfig = require('./knexfile'); 
const db = knex(dbConfig.development); 

//==== TESTING API END POINT ====
// server.get('/', (req, res) => {
//     res.send('API Running...');
//   });

  //------------------------------------GET LIST---------------------------
server.get("/api/products", (req, res) => {
  db('products').then(products => {
      res.status(200).json(products); 
  }).catch(err => {
      res.status(500).json({error: "Cannot get products"})
  })
});
//----------------------------------GET INDIVIDUAL--------------------------------------
server.get("/api/products/:id", (req, res) => {
  const { id } = req.params; 
  db("products")
  .where({id})
  .then(product => res.status(200).json(product))
  .catch (err => {
      res.status(500).json({error: "Cannot get the product"})
  });
})

const port = 4000

server.listen(process.env.PORT||port,()=>console.log('server running'))