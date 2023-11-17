import { Schema, model, models } from "mongoose";

const UserSchema = new Schema({
  created_at: {
    type: String,
    required: [true, 'Datetime is required.']
  },
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
  },
  image: {
    type: String,
  }
});

const User = models.User || model('User', UserSchema);

export default User;