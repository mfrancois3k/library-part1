// connection for mongoose
const mongoose = require("mongoose")
require('dotenv').config()
MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
})
.then(() => {
  console.log('Connected to MongoDB')
})
.catch((e)=>{
  console.error("Connection error", e.message)
})
const db = mongoose.connection 
module.exports = db

