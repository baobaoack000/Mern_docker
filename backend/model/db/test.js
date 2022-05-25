const mongoose = require("mongoose");

exports.connect = (app) => { 
  const connectWithretry = () => {
    console.log("Try to connect to mongoDB");
    mongoose
      .connect("mongodb://localhost:27017/test", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(() => {
        console.log("Connected to MongoDB...");
        app.emit("dbConnected");
      })
      .catch((err) => {
        "Connect unsuccessful, retrying in 2 sec  :" + err;
        setTimeout(connectWithretry, 2000);
      });

    connectWithretry();
  };
};



