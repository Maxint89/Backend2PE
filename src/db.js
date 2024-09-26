const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://backend70080:coderhouse@cluster0.cfyfu.mongodb.net/Supermercado?retryWrites=true&w=majority&appName=Cluster0");
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error);
    process.exit(1);
  }
};

module.exports = connectDB;
