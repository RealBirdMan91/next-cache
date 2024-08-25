import { Post } from "@prisma/client";
import React from "react";

type Props = {
  posts: Post[];
};

function PostsList({ posts }: Props) {
  return (
    <div className="border rounded-md p-2">
      <h2 className="text-lg text-red-400">Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <span>{post.title}</span>
            <span>{post.content?.slice(0, 10)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostsList;
