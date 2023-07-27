type Blog = {
  id: string;
  name: string;
  content: string;
  createdAt: Date;
};

let Blogs: Blog[] = [];

export const getAllBlogs = () => Blogs;

export const addBlog = (blog: Blog) => {
  Blogs.push(blog);
};

export const deleteBlog = (id: string) => {
  let newBlog = Blogs.filter((blog) => blog.id !== id);
  if (newBlog.length === Blogs.length) throw new Error("cannot get blog...");
  Blogs = newBlog;
};

export const updateBlog = (id: string, name: string, content: string) => {
  let blogIndex = Blogs.findIndex((blog) => blog.id === id);
  if (blogIndex === -1) throw new Error("cannot get blog...");
  Blogs[blogIndex] = {
    ...Blogs[blogIndex],
    name,
    content,
  };
};

export const getBlogById = (id: string) => {
  let blog = Blogs.find((blog) => blog.id === id);
  return blog;
};
