import Post from "../models/Post";

export const getAllPost = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({ posts });
};

export const getSinglePost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findById(postId);
  res.status(200).json({ post });
};

export const createPost = async (req, res) => {
  const { title, content, user } = req.body;
  const post = await Post.create({ title, content, user });
  res.status(201).json({ post });
};

export const updatePost = async (req, res) => {
  const { postId } = req.params;
  const post = await Post.findByIdAndUpdate(postId, req.body, { new: true });
  res.status(200).json({ post });
};

export const deletePost = async (req, res) => {
  const { postId } = req.params;
  await Post.findByIdAndDelete(postId);
  res.status(200).json({ message: "Post deleted successfully." });
};
