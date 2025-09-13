import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, 'Please enter a valid email'],
  },
  phone: {
    type: String,
    required: [true, 'Phone number is required'],
    trim: true,
  },
  message: {
    type: String,
    trim: true,
  },
  requestType: {
    type: String,
    default: 'Site Visit Request',
  },
  status: {
    type: String,
    enum: ['New', 'In Progress', 'Completed'],
    default: 'New',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Check if the model exists before creating a new one
const Contact = mongoose.models.Contact || mongoose.model('Contact', ContactSchema);

export default Contact;
