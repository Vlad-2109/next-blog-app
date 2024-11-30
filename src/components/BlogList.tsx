import { blog_data } from '@/assets/assets';
import { BlogItem } from './BlogItem';
import { useState } from 'react';

export const BlogList = () => {
	const [menu, setMenu] = useState<string>('All');

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
				{blog_data
					.filter((item) => menu === 'All' ? true : item.category === menu)
					.map((item) => (
						<BlogItem
							key={item.id}
							id={item.id}
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
