const router = require("express").Router();
const Comment = require("../database/models/comment.model");

router.post("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;

    const comment = new Comment({
      content: req.body.comment,
      postId, // Associez l'ID du post au champ postId
    });

    await comment.save();

    res.status(201).json(comment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;

    const comments = await Comment.find({ postId });

    res.json(comments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
