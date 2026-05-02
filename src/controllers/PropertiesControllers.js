const {objectId} = require ('mongodb');
const client = require('../helpers/client');

const propertiesCollection = client.db('E-Bari').collection('properties');


// get all properties............
const getProperties = async (req, res) =>{
    const properties = await propertiesCollection.find().toArray();
    res.status(200).json({success:true, message:"all properties", data:properties});

}

module.exports = {
    getProperties,
    
// }