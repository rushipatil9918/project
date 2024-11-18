import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    minlength: 2,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    match: [/.+@.+\..+/, 'Please enter a valid email address'],
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
  },
  
  city: {
    type: String,
    required: true,
    trim: true,
  },
  state: {
    type: String,
    required: true,
    trim: true,
  },
  pin: {
    type: String,
    required: true,
    trim: true,
    match: [/^\d{6}$/, 'Please enter a valid 6-digit pin code'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Export the model
const User = mongoose.model('User', userSchema);
export default User;
