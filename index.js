const express = require('express')
const cors = require('cors')
const port = process.env.PORT || 5000;
const app = express()
const client = require('./src/helpers/client');
require('dotenv').config()


// // ----------- Import Routes -----------
// const propertiesRoutes = require('./src/routes/PropertiesRoutes');
// const authRoutes = require('./src/routes/authRoutes');



// ----------- MIDDLEWARES -----------
app.use(cors());
app.use(express.json());

async function run() {
  try {
    await client.connect();
    console.log("MongoDB connected successfully !");


//     // ----------- Routes -----------
//     app.use('/properties', propertiesRoutes);
//     app.use('/auth', authRoutes);


    // ----------- Root --------------
    app.get('/', async(req, res) => {
      await client.db("admin").command({ ping: 1 })
      res.send('users managment server is running')
    })


    // ----------- 404 -----------
    app.use((req, res) => {
      res.status(404).json({ success: false, message: "Route not found" });
    });

    // ----------- SERVER RUN -----------
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`)
    })


  }
  catch (error) {
//     console.error("Error connecting to DB:", error);
//   }
// }
// run().catch(console.dir);

