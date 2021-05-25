const mongoose = require("mongoose");
const { username, password } = require("./credentials.json");

const URI = `mongodb+srv://${username}:${password}@cluster0.0lnwu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
console.log(URI);
const connectDB = async () => {
  await mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  });
  console.log("Database has been connected");
};

module.exports = connectDB;
