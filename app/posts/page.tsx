import PostsForm from "@/components/PostsForm";
import { fetchAllInvoices, fetchAllPosts } from "@/libs/data";
import React from "react";

async function PageOne() {
  const allPosts = await fetchAllPosts();
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl">Fetching all Posts</h1>

      <ul className="max-h-[300px] overflow-y-auto border rounded-md">
        {allPosts.map((post) => (
          <li key={post.id}>
            <span>{post.title}</span>
            <span>{post.content?.slice(0, 10)}</span>
          </li>
        ))}
      </ul>

      <PostsForm />
    </div>
  );
}

export default PageOne;
