import { connectDB } from '@/lib/config/db';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import fs from 'fs';
import BlogModel from '@/lib/models/blog.model';

const LoadDB = async () => {
	await connectDB();
};

LoadDB();

// API Endpoint to get all blogs
export async function GET(request: any) {

	const blogId = request.nextUrl.searchParams.get("id");
	if (blogId) {
		const blog = await BlogModel.findById(blogId);
		return NextResponse.json(blog);
	} else {
		const blogs = await BlogModel.find({});
		return NextResponse.json({ blogs });
	}
}

// API Endpoint for uploading blogs
export async function POST(request: Request) {	
	const formData = await request.formData();
	const timestamp = Date.now();

	const image = formData.get('image');

	if (image instanceof File) {
		const imageByteData = await image.arrayBuffer();
		const buffer = Buffer.from(imageByteData);
		const path = `./public/${timestamp}_${image.name}`;
		await writeFile(path, buffer);
		const imgUrl = `/${timestamp}_${image.name}`;

		const blogData = {
			title: `${formData.get('title')}`,
			description: `${formData.get('description')}`,
			category: `${formData.get('category')}`,
			author: `${formData.get('author')}`,
			image: `${imgUrl}`,
			authorImg: `${formData.get('authorImg')}`,
		};

		await BlogModel.create(blogData);
		console.log('Blog saved');

		return NextResponse.json({ success: true, message: 'Blog added' });
	} else {
		return NextResponse.json({ error: 'Invalid image file' }, { status: 400 });
	}
}

// API Endpoint to delete blog

export async function DELETE(request: any) {
	const id = request.nextUrl.searchParams.get("id");
	const blog = await BlogModel.findById(id);
	fs.unlink(`./public/${blog.image}`, () => { });
	await BlogModel.findByIdAndDelete(id);
	return NextResponse.json({ message: "Blog Deleted" });
}
