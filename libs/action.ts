"use server";

import { Invoice, Post } from "@prisma/client";
import prisma from "./prisma";

export async function createPost({
  title,
  content,
}: Pick<Post, "title" | "content">) {
  try {
    const newPost = await prisma.post.create({
      data: {
        title,
        content,
      },
    });
    return newPost;
  } catch (error) {
    return "something went wrong";
  }
}

export async function createInvoice({
  total,
  currency,
}: Pick<Invoice, "total" | "currency">) {
  try {
    const newInvoice = await prisma.invoice.create({
      data: {
        total,
        currency,
      },
    });
    return newInvoice;
  } catch (error) {
    return "something went wrong";
  }
}

export async function fetchLatestPosts() {
  console.log("Fetching posts data...");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = prisma.post.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  console.log("Posts data fetch completed after 3 seconds.");
  return data;
}

export async function fetchAllPosts() {
  console.log("Fetching all posts data...");
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const data = prisma.post.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log("All Posts data fetch completed after 3 seconds.");
  return data;
}

export async function fetchLatestInvoices() {
  console.log("Fetching invoices data...");

  const data = prisma.invoice.findMany({
    take: 5,
    orderBy: { createdAt: "desc" },
  });

  console.log("Invoices data fetch completed");
  return data;
}

export async function fetchAllInvoices() {
  console.log("Fetching all invoices data...");

  const data = prisma.invoice.findMany({
    orderBy: { createdAt: "desc" },
  });

  console.log("All Invoices data fetch completed");
  return data;
}
