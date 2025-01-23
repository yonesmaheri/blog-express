const { Blog } = require("../models");

async function allBlogsService() {
  const blogs = await Blog.findAll();
  return blogs;
}

async function singleBlogService(id) {
  const blog = await Blog.findOne({ where: { id } }); 
  return blog;
}

async function createBlogService(body) {
  const blog = await Blog.create({ title: body.title, body: body.body });
  return { message: "Blog created", blog };
}

async function updateBlogService(id, body) {
  const blog = await Blog.update(
    { title: body.title, body: body.body },
    { where: { id } }
  );
  return { message: "Blog updated", blog };
}

async function deleteBlogService(id) {
  const blog = await Blog.destroy({ where: { id } });
  return { message: "Blog deleted", blog };
}

module.exports = {
  allBlogsService,
  singleBlogService,
  createBlogService,
  updateBlogService,
  deleteBlogService,
};
