import { useEffect, useState } from 'react';
import { BlogItem } from './BlogItem';
import { IBlog } from '@/types/types';
import axios from 'axios';

export const BlogList = () => {
	const [menu, setMenu] = useState<string>('All');
	const [blogs, setBlogs] = useState<IBlog[]>([]);

	const fetchBlogs = async () => {
		const response = await axios.get('/api/blog');
		setBlogs(response.data.blogs);
		console.log(response.data.blogs);
	}

	useEffect(() => {
		fetchBlogs();
	}, [])

	const onClickHandler = (stack: string) => {
		setMenu(stack);
	};

	return (
		<div>
			<div className="flex justify-center gap-6 my-10">
				<button
					onClick={() => onClickHandler('All')}
					className={menu === 'All' ? `bg-black text-white py-1 px-4 rounded-sm` : ''}
				>
					All
				</button>
				<button
					onClick={() => onClickHandler('Technology')}
					className={menu === 'Technology' ? `bg-black text-white py-1 px-4 rounded-sm` : ''}
				>
					Technology
				</button>
				<button
					onClick={() => onClickHandler('Startup')}
					className={menu === 'Startup' ? `bg-black text-white py-1 px-4 rounded-sm` : ''}
				>
					Startup
				</button>
				<button
					onClick={() => onClickHandler('Lifestyle')}
					className={menu === 'Lifestyle'	? `bg-black text-white py-1 px-4 rounded-sm` : ''}
				>
					Lifestyle
				</button>
			</div>
			<div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
				{blogs
					.filter((item) => menu === 'All' ? true : item.category === menu)
					.map((item) => (
						<BlogItem
							key={item._id}
							id={item._id}
							image={item.image}
							title={item.title}
							description={item.description}
							category={item.category}
						/>
				))}
			</div>
		</div>
	);
};
