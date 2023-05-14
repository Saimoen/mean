const router = require("express").Router();
const Blog = require("../models/blog.model");

router.get("/get", async (req, res) => {
  try {
    const blogs = await Blog.find();
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const newBlog = new Blog({
      id: req.body.id,
      titre: req.body.titre,
      image: req.body.image,
      content: req.body.content,
      category: req.body.category,
    });
    await newBlog.save();
    res.status(201).json(newBlog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
