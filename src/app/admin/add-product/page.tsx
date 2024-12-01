'use client';

import axios from 'axios';
import Image from 'next/image';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { assets } from '@/assets/assets';
import { IDataState } from '@/types/types';

const AddProductPage = () => {
	const [image, setImage] = useState<File | null>(null);
	const [data, setData] = useState<IDataState>({
		title: '',
		description: '',
		category: 'Startup',
		author: 'Alex Benett',
		authorImg: '/author_img.png',
	});

	const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
		const name = e.target.name;
		const value = e.target.value;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

	const onChangeImageHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.files && e.target.files.length > 0) {
			setImage(e.target.files[0]);
		}
	};

	const onSubmitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const formData = new FormData();
		formData.append('title', data.title);
		formData.append('description', data.description);
		formData.append('category', data.category);
		formData.append('author', data.author);
		formData.append('authorImg', data.authorImg);
		formData.append('image', image!);
		const response = await axios.post('/api/blog', formData);
		if (response.data.success) {
			toast.success(response.data.message);
			setImage(null);
			setData({
				title: '',
				description: '',
				category: 'Startup',
				author: 'Alex Benett',
				authorImg: '/author_img.png',
			});
		} else {
			toast.error('Error');
		}
	};

	return (
		<>
			<form onSubmit={onSubmitHandler} className="pt-5 px-5 sm:pt-12 sm:pl-16">
				<p className="text-xl">Upload thumbnail</p>
				<label htmlFor="image">
					<Image
						className="mt-4 hover:cursor-pointer"
						src={!image ? assets.upload_area : URL.createObjectURL(image)}
						width={140}
						height={70}
						alt="upload-area"
					/>
				</label>
				<input
					onChange={onChangeImageHandler}
					type="file"
					id="image"
					hidden
					required
				/>
				<p className="text-xl mt-4">Blog title</p>
				<input
					className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
					name="title"
					type="text"
					value={data.title}
					placeholder="Type here"
					required
					onChange={onChangeHandler}
				/>
				<p className="text-xl mt-4">Blog description</p>
				<textarea
					className="w-full sm:w-[500px] mt-4 px-4 py-3 border"
					name="description"
					value={data.description}
					placeholder="write content here"
					rows={6}
					required
					onChange={onChangeHandler}
				/>
				<p className="text-xl mt-4">Blog category</p>
				<select
					name="category"
					value={data.category}
					className="w-40 mt-4 px-4 py-3 border text-gray-500"
					onChange={onChangeHandler}
				>
					<option value="Startup">Startup</option>
					<option value="Technology">Technology</option>
					<option value="Lifestyle">Lifestyle</option>
				</select>
				<br />
				<button type="submit" className="my-8 w-40 h-12 bg-black text-white">
					Add
				</button>
			</form>
		</>
	);
};

export default AddProductPage;
