const { ObjectId } = require('mongodb');
const client = require('../helpers/client');

const bookingCollection = client.db('E-Bari').collection('bookings');

// create booking .............
const createBooking = async (req, res) =>{
    const booking = req.body;
    const result = await bookingCollection.insertOne(booking);
    res.status(200).json({success:true, message:"booking created successfully", data:result});

}

module.exports = {
//     createBooking
// }