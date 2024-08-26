"use client";
import React from "react";
import { useSuspenseQuery } from "@tanstack/react-query";
import { fetchAllPosts } from "@/libs/action";

function PostsList() {
  const { data: posts, isLoading } = useSuspenseQuery({
    queryKey: ["posts"],
    queryFn: () => fetchAllPosts(),
  });
  console.log(isLoading);

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
