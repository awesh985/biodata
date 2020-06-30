const mongoose = require("mongoose");

const post_schema = new mongoose.Schema(
  {
    userfirstname: {
      type: String,
      required: "userfirstname  is Required"
    },
    userlastname: {
      type: String,
      required: "userlastname is Required"
    },
    
       subject:{
        type: String,
        required: "subject is Required"
      },
      subscribe:{
        type: Boolean,
        required: "subscribe is Required"
      }
    },
    
  
  {
    timestamps: true
  }
);

module.exports = mongoose.model("user", post_schema);
