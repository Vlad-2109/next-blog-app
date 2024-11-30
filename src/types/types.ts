import { StaticImageData } from 'next/image';

export interface BlogItemProps {
	id: number;
	title: string;
	description: string;
	category: string;
	image: string | StaticImageData;
}

export interface IBlog {
	id: number;
	title: string;
	description: string;
	image: StaticImageData;
	date: number;
	category: string;
	author: string;
	author_img: StaticImageData;
}
