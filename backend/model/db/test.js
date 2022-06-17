const mongoose = require("mongoose");

exports.connect = (app) => { 
  console.log("Try to connect to mongoDB");
  const connectWithretry = () => {
    mongoose.Promise = global.Promise;
    mongoose
      .connect("mongodb://root:root@localhost:27017/", {
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



