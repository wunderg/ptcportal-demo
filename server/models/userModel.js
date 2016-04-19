import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true
  },

  password: String
});


userSchema.pre('save', next => {
  const user = this;

  bcrypt.getSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }

    bcrypt.hash(user.password, salt, null, (err2, hash) => {
      if (err2) {
        return next(err);
      }

      user.password = hash;
      next();
    });
  });
});
