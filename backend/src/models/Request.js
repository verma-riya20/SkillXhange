import mongoose from 'mongoose';

const requestSchema = new mongoose.Schema({
  tutorId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  learnerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  learnerName: String,
  learnerEmail: String,
  status: { type: String, enum: ['pending', 'accepted', 'rejected'], default: 'pending' },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model('Request', requestSchema);