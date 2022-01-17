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

module.exports = router
