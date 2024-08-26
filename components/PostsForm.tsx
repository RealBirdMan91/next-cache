"use client";
import { createPost } from "@/libs/action";
import React from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function PostsForm() {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");
  const queryClient = useQueryClient();

  const { mutateAsync } = useMutation({
    mutationFn: (data: { title: string; content: string }) => createPost(data),
    onSuccess: () => {
      setTitle("");
      setContent("");
      queryClient.invalidateQueries({ queryKey: ["posts"] });
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await mutateAsync({ title, content });
  }

  return (
    <div>
      <h2 className="text-lg text-red-400">Create new invoice</h2>
      <form action="" className="flex flex-col gap-2" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="title"
          className="border rounded-md"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="content"
          className="border rounded-md"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button
          className="bg-blue-400 px-4 py-1 text-white rounded-md"
          type="submit"
        >
          create post
        </button>
      </form>
    </div>
  );
}

export default PostsForm;
