import Book from '../models/Books.js'; // match the filename exactly


export const createBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    res.status(201).json(book);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getBooks = async (req, res) => {
  try {
    const books = await Book.find().populate('seller');
    res.status(200).json(books);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};