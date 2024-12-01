import { connectDB } from '@/lib/config/db';
import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import BlogModel from '@/lib/models/blog.model';

const LoadDB = async () => {
	await connectDB();
};

LoadDB();

// API Endpoint to get all blogs
export async function GET() {

	const blogs = await BlogModel.find({});

	return NextResponse.json({blogs});
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
