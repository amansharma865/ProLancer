const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.error("MongoDB connection error:", error);
    }
};

module.exports = connect;