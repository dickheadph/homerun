import mongoose from 'mongoose';
//const mongoose = require('')
const db = process.env.ATLAS_URI;
const connectDB = async () => {
  mongoose.set('strictQuery', true);
  return await mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log('Connected to M_DB-ATLAS');
    })
    .catch((err) => {
      console.log('MongoDB Connection failed', err);
    });
};

export default connectDB;
