let mongoose = require("mongoose");
// tells mongoose to use ES6 implementation of promises
mongoose.Promise = global.Promise;
const MONGODB_URI = "mongodb://root:root@localhost:27017/";
mongoose.connect(MONGODB_URI);

mongoose.connection
  .once("open", () => console.log("Test Unit Connected!"))
  .on("error", (error) => {
    console.warn("Error : ", error);
  });

// runs before each test
beforeEach(async(done) => {
  mongoose.connection.dropDatabase();
  done();
});
