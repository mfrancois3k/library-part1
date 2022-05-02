const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()
const cors = require("cors")
const libraryRouter = require('./routes/LibraryRoutes.js')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
app.use(cors())



PORT = process.env.PORT
MONGO_URI = process.env.MONGO_URI;
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.qqfeg.mongodb.net/myThridDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => console.log('MongoDB Connected...'))
.catch((err) => console.log(err))

app.use(libraryRouter)


app.listen(PORT, ()=>{
  console.log("Server is running on port:", PORT)
})

