// lib/getMediumPosts.ts
import Parser from "rss-parser";

// Define the structure for each Medium post
interface MediumPost {
  title: string;
  link: string;
  pubDate: string;
  contentSnippet: string;
  guid: string;
}

const parser = new Parser();

export async function getMediumPosts(): Promise<MediumPost[]> {
  const feed = await parser.parseURL("https://medium.com/feed/@kaxun");
  return feed.items.slice(0, 3) as MediumPost[]; // Adjust to the number of posts you want
}
