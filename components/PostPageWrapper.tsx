import React from "react";
import PostsList from "./PostsList";
import { fetchAllPosts } from "@/libs/action";
import { HydrationBoundary, dehydrate } from "@tanstack/react-query";
import { getQueryClient } from "@/app/get-query-client";
import { headers } from "next/headers";

function PostPageWrapper() {
  headers();
  const queryClient = getQueryClient();
  queryClient.prefetchQuery({
    queryKey: ["posts"],
    queryFn: () => fetchAllPosts(),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PostsList />
    </HydrationBoundary>
  );
}

export default PostPageWrapper;
