import mongoose from 'mongoose';

const db_uri = process.env.DB_URI || '';

export const connectDB = async () => {
	mongoose
		.connect(db_uri)
		.then(() => {
			console.log('MongoDB is connected');
		})
		.catch((err) => console.log('DB error', err));
};
