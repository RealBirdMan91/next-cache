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
