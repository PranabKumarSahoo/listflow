const mongoose = require('mongoose');

const url = `mongodb+srv://pranab90:pranab90783@cluster0.0opmf0k.mongodb.net/`;

const connectDatabase = async (req, res) => {
    try {
        await mongoose
            .connect(url)
            .then(() => {
                console.log("Database Connected!!");
            });
    } catch (error) {
        console.error("Database Connection Failed");
    }
};
connectDatabase();