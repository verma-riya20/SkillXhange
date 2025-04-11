import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  title: {
    type: String
  },
  image: {
    type: String
  },
  skills: {
    type: [String],
    default: []
  },
  rating: {
    type: Number,
    default: 0
  },
  reviews: {
    type: Number,
    default: 0
  },
  role: {
    type: String,
    default: 'instructor' // helpful if you also store learners/admins
  }
}, {
  timestamps: true
});

export default mongoose.model('Instructors', userSchema);
