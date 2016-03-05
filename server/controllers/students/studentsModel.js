import mongoose from 'mongoose';

const studentsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  lesson: {
    type: Number,
    required: true
  },
  level: {
    type: Number,
    required: true
  },
  interview: {
    type: String,
    required: true
  },
  decision: {
    type: String,
    required: true
  }
});

export default mongoose.model('students', studentsSchema);
