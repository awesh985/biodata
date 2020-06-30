const router = require("express").Router();
const mongoose = require("mongoose");

const Post = mongoose.model("user");


router.get("/", async (req, res) => {
   const posts = await Post.find({});
    
    res.send(posts);
    //res.status(200).send({"message":"Data received"});

  });
  router.get("/:postId", async (req, res) => {
      try {
    const post = await Post.findOne({ _id: req.params.postId });
    res.send(post);
      } catch(error){res.status(500);}
      
  });
  
  router.put("/:postId", async (req, res) => {
      try{
    const post = await Post.findByIdAndUpdate(
      {
        _id: req.params.postId
      },
      req.body,
      {
        new: true,
        runValidators: true
      }
    );
  
    res.send(post);
      } catch (error){res.send(500)}
      
  });

  router.delete("/:postId", async (req, res) => {
   try{ const post = await Post.findByIdAndRemove({
      _id: req.params.postId
    });
    res.send(post);
} catch (error) {res.send(500)}
  });
  
 // router.post('/', function(req,res){
   // console.log(req.body);
     //  res.status(401).send({"message":"Data received"});
   //})

 router.post("/", async (req, res) => {
      try { 
    const post = new Post();
    post.userfirstname = req.body.userfirstname;
    post.userlastname= req.body.userlastname;
    post.subject= req.body.subject;
    post.subscribe= req.body.subscribe;

    await post.save();
    res.send(post)
 } catch (error) {res.status(500)}
  });


  module.exports = router;