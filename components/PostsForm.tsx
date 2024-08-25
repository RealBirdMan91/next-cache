"use client";
import React from "react";

function PostsForm() {
  const [title, setTitle] = React.useState<string>("");
  const [content, setContent] = React.useState<string>("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log({ title, content });
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
