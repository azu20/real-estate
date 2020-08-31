const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(routes);

// Connect to the Mongo DB
mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://azucena_1:wc5vclNd7KxqpytQ@cluster-p7dpjvmj.6prcb.mongodb.net/heroku_p7dpjvmj?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// mongoose.connect(
//   process.env.MONGODB_URI ||
//   "mongodb+srv://azucena_1:wc5vclNd7KxqpytQ@cluster-p7dpjvmj.6prcb.mongodb.net/heroku_p7dpjvmj?retryWrites=true&w=majority", {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true
//   });
  
// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
