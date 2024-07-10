import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  ipAddress: {
    type: String,
    required: true,
  },
  pageUrl: {
    type: String, // Ensure pageUrl field is defined correctly
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.models.User || mongoose.model('User', userSchema);

export default User;
