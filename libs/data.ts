import { Post } from "@prisma/client";
import prisma from "./prisma";

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
