const mongoose = require('mongoose');

const connectDatabase = async (req, res) => {
    try {
        await mongoose
            .connect("mongodb+srv://pranab90:pranab90783@cluster0.0opmf0k.mongodb.net/")
            .then(() => {
                console.log("Database Connected!!");
            });
    } catch (error) {
        res.status(400).json({
            message: "Database Not Connected!!!"
        });
    }
};
connectDatabase();