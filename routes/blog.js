const router = require("express").Router();
const {
  getBlogList,
  getBlogDetail,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blog");

router.get("/", getBlogList);
router.get("/:id", getBlogDetail);
router.post("/create", createBlog);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;