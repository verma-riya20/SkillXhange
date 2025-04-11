import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  role: String,
  skillsOffered: [String],
  skillsWanted: [String],
  availability: String,
  location: String,
});

export default mongoose.model('User', userSchema);
