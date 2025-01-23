const {blogSchema} = require("../schema/blog");

function blogValidation(req, res, next) {
  try {
    blogSchema.parse(req.body);
    next();
  } catch (error) {
    return res.status(400).json({ error: error.errors[0].message });
  }  
}

module.exports = blogValidation;