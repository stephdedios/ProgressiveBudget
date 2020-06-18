const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

let dataUri =
  "mongodb://heroku_z5p7z064:kkfh025gr3rgg3iea6n4gp4rnb@ds013738.mlab.com:13738/heroku_z5p7z064";

if (process.env.MONGODB_URI) {
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  });
} else {
  mongoose.connect(dataUri);
}

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
