const { ObjectId } = require('mongodb');
const client = require('../helpers/client');

const userCollection = client.db('E-Bari').collection('Users');

// create user............
const createUser = async (req, res) => {
    try {
        const user = req.body;
        // ১. check if user already exists
        const existingUser = await userCollection.findOne({ email: user.email });
        if (existingUser) {
            return res.status(400).json({ 
                success: false, 
                message: "You already have an account! Please sign in now. " 
            });
        }
         // ২.create new user
         const result = await userCollection.insertOne(user);
         res.status(200).json({ 
             success: true, 
             message: "Account created successfully! ", 
             data: result 
         });
        
     } catch (error) {
         res.status(500).json({ success: false, message: "Internal Server Error" });
     }
 }

  // get current user ........
  const getCurrentUser = async (req, res) =>{
      const email =req.query.email;
//     const user = await userCollection.findOne({email:email});
//      if(!user){
//          return res.status(404).json({ 
//              success: false, 
//              message: "User not found" 
//          });
//      }
//     res.status(200).json({ 
//         success: true, 
//         message: "User found", 
//         data: user 
//     });
// }

// // login user............
// const loginUser = async (req, res) => {
//     try {
//         const { email, password } = req.body;

//         // ১. user find
//         const user = await userCollection.findOne({ email: email });
        
//          if (!user) {
//              return res.status(404).json({ 
//                  success: false, 
//                  message: "User not found! Please create an account." 
//              });
//          }

//          // ২. check password match
//          if (user.password !== password) {
//              return res.status(401).json({ 
//                  success: false, 
//                  message: "Invalid password! Please try again." 
//              });
//          }

//          // ৩. if login successful
//          const { password: _, ...userData } = user;
//          res.status(200).json({ 
//              success: true, 
//              message: "Sign in successful! Welcome back.", 
//              user: userData 
//          });

//      } catch (error) {
//          res.status(500).json({ success: false, message: "Internal Server Error" });
//      }
//  }

//  module.exports = {
//      createUser,
//      getCurrentUser,
//      loginUser
//  }