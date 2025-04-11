// models/Book.js
import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  subject: String,
  condition: String,
  price: Number,
  isAvailable: Boolean,
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  },
});

export default mongoose.model('Book', bookSchema);