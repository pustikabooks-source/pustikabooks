import { defineMcp } from "@lovable.dev/mcp-js";
import listBlogPosts from "./tools/list-blog-posts";
import getBlogPost from "./tools/get-blog-post";

export default defineMcp({
  name: "pustika-books-mcp",
  title: "Pustika Books MCP",
  version: "0.1.0",
  instructions:
    "Tools for the Pustika Books site. Use `list_blog_posts` to browse published blog posts and `get_blog_post` to read a full post by slug.",
  tools: [listBlogPosts, getBlogPost],
});