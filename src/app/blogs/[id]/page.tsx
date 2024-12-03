'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import axios from 'axios';
import { assets } from '@/assets/assets';
import { IBlog } from '@/types/types';
import { Footer } from '@/components/Footer';

const BlogPage = () => {
	const params = useParams<{ id: string }>();

	const [data, setData] = useState<IBlog | null>(null);

	const fetchBlogData = async () => {
		const response = await axios.get('/api/blog', { params: { id: params.id } })
		setData(response.data);
	};

	useEffect(() => {
		fetchBlogData();
	}, []);

	return data ? (
		<>
			<div className="bg-gray-200 py-5 px-5 md:px-12 lg:px-28">
				<div className="flex justify-between items-center">
					<Link href="/">
						<Image
							src={assets.logo}
							alt="logo"
							width={180}
							className="w-[130px] sm:w-auto"
						/>
					</Link>
					<Link href='/admin/add-product' className="flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]">
						Get started <Image src={assets.arrow} alt="arrow" />
					</Link>
				</div>
				<div className="text-center my-24">
					<h1 className="text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto">
						{data?.title}
					</h1>
					<Image
						src={data.authorImg}
						alt="author_img"
						width={60}
						height={60}
						className="mx-auto mt-6 border border-white rounded-full"
					/>
					<p className="mt-1 pb-2 tet-lg max-w-[740px] mx-auto">
						{data.author}
					</p>
				</div>
			</div>
			<div className="mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10">
				<Image
					src={data.image}
					alt="blog"
					width={1280}
					height={720}
					className="border-4 border-white"
				/>
				<div className="blog-content" dangerouslySetInnerHTML={{__html:data.description}}></div>
				<div className="my-24">
					<p className="text-black font-semibold my-4">
						Share this article on social media
					</p>
					<div className="flex">
						<Image src={assets.facebook_icon} width={50} alt="facebook" />
						<Image src={assets.twitter_icon} width={50} alt="twitter" />
						<Image src={assets.googleplus_icon} width={50} alt="googleplus" />
					</div>
				</div>
			</div>
			<Footer />
		</>
	) : (
		<></>
	);
};

export default BlogPage;
