const express = require("express")
const Book = require("../models/book")
const app = express()
const bookModel = require('../models/book')

//GET ALL BOOKS DATA
app.get("/books", async (req, res) => {
  const books = await bookModel.find({})
  try{
    res.send(books)
  } catch(error) {
    res.status(500).send(error)
  }
})

app.post('/book', async (req, res) => {
  const createBook = await bookModel(req.body)
  try {
     await createBook.save();
     return res.status(201).json({ createBook })
    } catch (error) {
      return res.status(500).json({ error: error.message})
    }
  });

  app.get('/books/:id', async (req,res) => {
    try {
        const { id } = req.params;
        const book = await bookModel.findById(id)
        if  (book) {
            return res.status(200).json({book})
        }
    }catch(err){
        return res.status(500).send('item with given id does not exist')
    }
})

app.put('/books/:id', async (req, res) => {
  try {
    const { id } = req.params;
    bookModel.findByIdAndUpate(id, req.body, { new: true }, (err, book) => {
       if (err) {
         res.status(500).send(err);
       }
       if (!book) {
         res.status(500).send("Book Not Found");
       }
       return res.status(200).json(book);
    })
  } catch (error) {
    return res.status(500).send(error.message);
  }
})

app.delete('/books/:id', async (request, response) => {
  try {
    const book = await bookModel.findByIdAndDelete(request.params.id);
    if (!book) {
    response.status(404).send('No item found');
    }
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});
module.exports = app;