// implement your posts router here
const express = require("express")
const router = express.Router()
const Post = require("./posts-model")

router.get("/", async (req, res) => {
  try {
    const data = await Post.find()
    res.status(200).json(data)
  } catch (err) {
    res
      .status(500)
      .json({ message: "The posts information could not be retrieved" })
  }
})

router.get("/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((user) => {
      if (!user) {
        res
          .status(404)
          .json({ message: "The post with the specified ID does not exist" })
      }
      res.json(user)
    })
    .catch((err) => {
      res.status(500).json({
        message: "The post information could not be retrieved",
        error: err.message,
      })
    })
})

module.exports = router
