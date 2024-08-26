import PostsForm from "@/components/PostsForm";
import React from "react";
import { getQueryClient } from "../get-query-client";
import { fetchAllPosts } from "@/libs/action";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import PostsList from "@/components/PostsList";

async function PostsPage() {
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => fetchAllPosts(),
  });
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-3xl">Fetching all Posts</h1>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <PostsList />
        <PostsForm />
      </HydrationBoundary>
    </div>
  );
}

export default PostsPage;
