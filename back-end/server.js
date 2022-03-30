const express = require('express');
const bodyParser = require("body-parser");

// Configure multer so that it will upload to '../front-end/public/images'
const multer = require('multer')
const upload = multer({
  dest: '../front-end/public/images/',
  limits: {
    fileSize: 10000000
  }
});

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    likes: Number,
    path: String,
    comments: Number,
    earnings: Number,
    platform: String,
    title: String,
    earnings: Number
});

const Post = mongoose.model('Post', postSchema);

const sponsorSchema = new mongoose.Schema({
  company: String,
  value: Number
});

const Sponsor = mongoose.model("Sponsor", sponsorSchema);

const affiliateSchema = new mongoose.Schema({
  product: String,
  earnings: Number
});

const Affiliate = mongoose.model("Affiliate", affiliateSchema);

mongoose.connect('mongodb://localhost:27017/influencer', {
  useNewUrlParser: true
});

app.post('/api/photos', upload.single('photo'), async (req, res) => {
    // Just a safety check
    console.log("Entering POST photos");
    if (!req.file) {
        return res.sendStatus(400);
    }
    res.send({
        path: "/images/" + req.file.filename
    });
});

app.post('/api/posts', async (req, res) => {
    console.log("Entering POST posts");
    const post = new Post({
        likes: req.body.likes,
        path: req.body.path,
        comments: req.body.comments,
        earnings: req.body.earnings,
        platform: req.body.platform,
        title: req.body.title,
    });
    console.log(req.body);
    try {
        await post.save();
        res.send(post);
    } 
    catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
});

app.get('/api/posts', async (req, res) => {
    try {
      let posts = await Post.find();
      res.send(posts);
    } catch (error) {
      console.log(error);
      res.sendStatus(500);
    }
});

app.delete('/api/posts/:id', async (req, res) => {
  try {
    await Post.deleteOne({
      _id: req.params.id
    });
    // console.log(req.params.id, " deleted");
    res.sendStatus(200);
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put("/api/posts/:id", async (req, res) => {
  try {
    let post = await Post.findOne({
      _id: req.params.id,
    });
    post.likes = req.body.likes,
    post.path = req.body.path,
    post.comments = req.body.comments,
    post.earnings = req.body.earnings,
    post.platform = req.body.platform,
    post.title = req.body.title,
    await post.save();
  } 
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/affiliate", async (req, res) => {
  console.log("in Affiliate GET");
  try {
    let affiliate = await Affiliate.find();
    console.log(affiliate);
    res.send(affiliate);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.get("/api/sponsors", async (req, res) => {
  try {
    let sponsors = await Sponsor.find();
    res.send(sponsors);
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.post('/api/sponsors', async (req, res) => {
  console.log("Entering POST sponsors");
  const sponsor = new Sponsor({
    company: req.body.company,
    value: req.body.value
  });
  console.log(req.body);
  try {
      await sponsor.save();
      res.send(sponsor);
  } 
  catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

app.post('/api/affiliate', async (req, res) => {
  console.log("Entering POST affiliate");
  const affiliate = new Affiliate({
    product: req.body.product,
    earnings: req.body.earnings
  });
  console.log(req.body);
  try {
      await affiliate.save();
      res.send(affiliate);
  } 
  catch (error) {
      console.log(error);
      res.sendStatus(500);
  }
});

app.put('/api/sponsors/:id', async (req, res) => {
  try {
    let sponsor = await Sponsor.findOne({
      _id: req.params.id,
    });
    sponsor.company = req.body.company,
    sponsor.value = req.body.value,
    await sponsor.save();
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/sponsors/:id', async (req, res) => {
  try {
    await Sponsor.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.put('/api/affiliate/:id', async (req, res) => {
  try {
    let affiliate = await Affiliate.findOne({
      _id: req.params.id,
    });
    affiliate.product = req.body.product,
    affiliate.earnings = req.body.earnings,
    await affiliate.save();
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.delete('/api/affiliate/:id', async (req, res) => {
  try {
    await Affiliate.deleteOne({
      _id: req.params.id
    });
    res.sendStatus(200);
  }
  catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
});

app.listen(3035, () => console.log('Server listening on port 3035!'));