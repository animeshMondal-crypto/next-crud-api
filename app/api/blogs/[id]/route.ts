import { deleteBlog, getBlogById, updateBlog } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  try {
    const blog = getBlogById(id);
    return NextResponse.json(blog, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error! Cannot get Blog...", error },
      { status: 500 }
    );
  }
};

export const DELETE = async (request: Request) => {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  try {
    deleteBlog(id);
    return NextResponse.json(
      { message: `Blog with id-${id} Deleted...` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error! Cannot Detete Blog...", error },
      { status: 500 }
    );
  }
};

export const PUT = async (request: Request) => {
  const id = request.url.slice(request.url.lastIndexOf("/") + 1);
  const { name, content } = await request.json();
  try {
    updateBlog(id, name, content);
    return NextResponse.json(
      { message: `Blog with id-${id} Updated...` },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error! Cannot Update Blog...", error },
      { status: 500 }
    );
  }
};
