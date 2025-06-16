const mongoose = require('mongoose')

const DatabaseCon = async() => {
  try {
    const database = await mongoose.connect(process.env.MONGODB_CONNECTION_STRING)
    if(database){
      console.log("Database connection successful");
    }else{
      console.log("Failed to connect database")
    }
  } catch (error) {
    console.log("Something went wrong in the server!")
  }
}
module.exports = DatabaseCon