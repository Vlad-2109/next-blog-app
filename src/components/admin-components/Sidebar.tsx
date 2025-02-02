import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';

export const Sidebar = () => {
	return (
		<div className="flex flex-col bg-slate-100 border border-black">
			<div className="px-2 sm:pl-14 pt-3 pb-[13px] border-b border-black">
				<Link href='/'>
					<Image src={assets.logo} alt="logo" width={120} />
				</Link>
			</div>
			<div className="w-28 sm:w-80 h-[100vh] relative py-12 ">
				<div className="w-[50%] sm:w-[80%] absolute right-0">
					<Link
						href="/admin/add-product"
						className="flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
					>
						<Image src={assets.add_icon} alt="add-icon" width={28} />
						<p>Add blogs</p>
					</Link>
					<Link
						href="/admin/blog-list"
						className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
					>
						<Image src={assets.blog_icon} alt="add-icon" width={28} />
						<p>Blog lists</p>
					</Link>
					<Link
						href="/admin/subscriptions"
						className="mt-5 flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[-5px_5px_0px_#000000]"
					>
						<Image src={assets.email_icon} alt="add-icon" width={28} />
						<p>Subscriptions</p>
					</Link>
				</div>
			</div>
		</div>
	);
};
