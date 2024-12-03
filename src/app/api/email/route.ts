import { connectDB } from '@/lib/config/db';
import EmailModel from '@/lib/models/email.model';
import { NextResponse } from 'next/server';

const LoadDB = async () => {
	await connectDB();
};

LoadDB();

export async function POST(request: Request) {
	const formData = await request.formData();
	const emailData = {
		email: `${formData.get('email')}`,
	};

	await EmailModel.create(emailData);
	return NextResponse.json({ success: true, message: 'Email Subscribed' });
}
