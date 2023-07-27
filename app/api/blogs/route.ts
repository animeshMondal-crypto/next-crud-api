import { addBlog, getAllBlogs } from "@/lib/data";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    let allblogs = getAllBlogs();
    return NextResponse.json(allblogs, {
      status: 200,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Internal Server Error! Cannot get Blogs...",
    });
  }
};

export const POST = async (request: Request) => {
  let { name, content } = await request.json();
  try {
    const newBlog = {
      name,
      content,
      createdAt: new Date(),
      id: Date.now().toString(),
    };
    addBlog(newBlog);
    return NextResponse.json(
      { message: "New Blog Posted...", newBlog },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error! Cannot Create Blog...", error },
      { status: 500 }
    );
  }
};
