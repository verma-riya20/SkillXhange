import mongoose from 'mongoose';

const TutorSchema = new mongoose.Schema({
  name: String,
  title: String,
  image: String,
  skills: [String],
  rating: Number,
  reviews: Number,
  email: String, 
});

const Tutor = mongoose.model('Tutor', TutorSchema);
export default Tutor;
