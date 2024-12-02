import { StaticImageData } from 'next/image';

export interface BlogItemProps {
	id: string;
	title: string;
	description: string;
	category: string;
	image: string | StaticImageData;
}

export interface BlogTableItemProps {
	authorImg: string;
	title: string;
	author: string;
	date: string;
}

export interface IBlog {
	_id: string;
	title: string;
	description: string;
	category: string;
	author: string;
	image: string;
	authorImg: string;
	date: string;
	__v: number;
}

export interface IDataState {
	title: string;
	description: string;
	category: string;
	author: string;
	authorImg: string;
}
