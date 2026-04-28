const {objectId} = require ('mongodb');
const client = require('../helpers/client');

const userCollection = client.db('E-Bari').collection('Users');

// create user............
const createUser = async (req , res ) =>{
    const user = req.body;
    const result = await userCollection.insertOne(user);
    res.status(200).json({success:true, message:"user created successfully", data:result});
}

module.exports = {
    createUser,
    
}