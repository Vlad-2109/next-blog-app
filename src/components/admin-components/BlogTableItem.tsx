import Image from 'next/image';
import { assets } from '@/assets/assets';
import { BlogTableItemProps } from '@/types/types';

const BlogTableItem: React.FC<BlogTableItemProps> = ({ authorImg, title, author, date }) => {

    const blogDate = new Date(date);

	return (
		<tr className="bg-white border-b">
			<td
				scope="row"
				className="items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
			>
				<Image
					width={40}
					height={40}
					src={authorImg ? authorImg : assets.profile_icon}
					alt="author"
				/>
				<p>{author ? author : 'No author'}</p>
			</td>
			<td className="px-6 py-4">{title ? title : 'no title'}</td>
			<td className="px-6 py-4">{blogDate.toDateString()}</td>
			<td className="px-6 py-4 cursor-pointer">x</td>
		</tr>
	);
};

export default BlogTableItem;
