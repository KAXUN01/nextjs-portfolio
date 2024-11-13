// pages/blog.tsx
import { useEffect, useState } from "react";
import {
    MediumPost
  } from "@/constants";

// Define the structure for a Medium post based on the utility function's output
interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  guid: string;
}

const Blog: React.FC = () => {
  const [posts, setPosts] = useState<MediumPost[]>([]);

  useEffect(() => {
    async function fetchPosts() {
      const mediumPosts = await getMediumPosts();
      setPosts(mediumPosts);
    }
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">My Medium Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.guid} className="mb-6">
            <a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-semibold text-blue-600"
            >
              {post.title}
            </a>
            <p className="text-gray-600">
              {new Date(post.pubDate).toLocaleDateString()}
            </p>
            <p>{post.contentSnippet}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blog;
