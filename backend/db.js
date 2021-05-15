const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://osama123:osama123@todolist.p8bpp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const connectDB = async () => {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false
        })
        console.log('MongoDB Connected..!');
    } catch (error) {
        console.log(error.message);
        process.exit(1);
    }
}

module.exports = connectDB;