const {
  allBlogsService,
  createBlogService,
  updateBlogService,
  deleteBlogService,
} = require("../services/blog");

async function getBlogList(req, res) {
  const blogList = await allBlogsService();
  res.send({ data: blogList });
}

async function getBlogDetail(req, res) {
  const blog = await allBlogsService(req.params.id);
  res.send({ data: blog });
}

async function createBlog(req, res) {
  try {
    const { title, body } = req.body;
    if (!title || !body) {
      return res
        .status(400)
        .json({ error: "Title and body are required to create a blog" });
    }
  } catch (error) {
    return res
      .status(500)
      .json({ error: "An error occurred while creating the blog" });
  }
  const createdBlog = await createBlogService({ title, body });
  res.send(createdBlog);
}

const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body } = req.body;
    if (!id) {
      return res.status(400).json({ error: "Blog ID is required" });
    }
    if (!title || !body) {
      return res.status(400).json({ error: "Title and body are required" });
    }
    const updatedBlog = await updateBlogService(id, { title, body });
    return res.status(200).json(updatedBlog);
  } catch (error) {
    console.error("Error updating blog:", error);
    return res
      .status(500)
      .json({ error: "An error occurred while updating the blog" });
  }
};

async function deleteBlog(req, res) {
  const updatedBlog = await deleteBlogService(req.params.id);
  res.send(updatedBlog);
}

module.exports = {
  getBlogList,
  getBlogDetail,
  createBlog,
  updateBlog,
  deleteBlog,
};
