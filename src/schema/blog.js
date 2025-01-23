const zod = require("zod");

const blogSchema = zod.object({
  title: zod
    .string("title required")
    .nonempty("title required")
    .min(5)
    .max(100),
  body: zod.string("body required").nonempty("body required").min(5),
});

module.exports = { blogSchema };
