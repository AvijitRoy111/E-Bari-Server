const { ObjectId } = require('mongodb');
const client = require('../helpers/client');

const contactCollection = client.db('E-Bari').collection('contacts');

// create contact .............
const createContact = async (req, res) =>{
    const contact = req.body;
    const result = await contactCollection.insertOne(contact);
    res.status(200).json({success:true, message:"contact created successfully", data:result});

}

module.exports = {
    createContact
}