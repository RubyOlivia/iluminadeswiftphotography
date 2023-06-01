const mongoose = require("mongoose");

const db = process.env.DATABASE;

// Connecting mongoDB Database
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((e) => {
    console.log(e);
  });
