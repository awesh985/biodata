const express = require("express");
//require("express-async-errors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const cors = require("cors");
const mongoDBErrors = require("mongoose-mongodb-errors");
mongoose.plugin(mongoDBErrors);
mongoose.Promise= global.Promise;

mongoose.connect("mongodb+srv://abesh:abesh@cluster0-duuve.mongodb.net/test?retryWrites=true&w=majority",
      { useNewUrlParser: true,useUnifiedTopology: true }).then(()=>{
          console.log('mongodb connected')
      });


     // const MongoClient = require('mongodb').MongoClient;
      //const uri = "mongodb+srv://abesh:<password>@cluster0-1t2bb.mongodb.net/<dbname>?retryWrites=true&w=majority";
    //  const client = new MongoClient(uri, { useNewUrlParser: true });
    //  client.connect(err => {
     //   const collection = client.db("test").collection("devices");
     //   // perform actions on the collection object
     //   client.close();
    //  });
    //mongodb+srv://abesh:abeshkr@cluster0-1t2bb.mongodb.net/abeshkrtest?retryWrites=true&w=majority  





//Models
require("./model/post");

//middleware
app.use(bodyParser.json()).use(morgan());
app.use(cors());

//Routes
app.use("/posts", require("./routes/posts"));


//Not Found Route
app.use((req, res, next) => {
    req.status = 404;
    const error = new Error("Routes not found");
    next(error);
  });
  
  //error handler
  
  if (app.get("env") === "production") {
    app.use((error, req, res, next) => {
      res.status(req.status || 500).send({
        message: error.message
      });
   });
  } 
  
  app.use((error, req, res, next) => {
    res.status(req.status || 500).send({
      message: error.message,
      stack: error.stack
    });
  });











const PORT = 8888;





app.listen(PORT, function(){
    console.log("server running on localhost:" + PORT);
}
);