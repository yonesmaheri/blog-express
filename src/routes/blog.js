const router = require("express").Router();

//routes for blog
const {
  getBlogList,
  getBlogDetail,
  createBlog,
  deleteBlog,
  updateBlog,
} = require("../controller/blog");

//middlewares
const blogValidation = require("../middlewares/validation");

router.get("/", getBlogList);
router.get("/:id", getBlogDetail);
router.post("/create",blogValidation, createBlog);
router.put("/update/:id", updateBlog);
router.delete("/delete/:id", deleteBlog);

module.exports = router;