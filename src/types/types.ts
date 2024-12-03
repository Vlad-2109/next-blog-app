import { StaticImageData } from 'next/image';

export interface BlogItemProps {
	id: string;
	title: string;
	description: string;
	category: string;
	image: string | StaticImageData;
}

export interface BlogTableItemProps {
	mongoId: string;
	authorImg: string;
	title: string;
	author: string;
	date: Date;
	deleteBlog: (mongoId: string) => void;
}

export interface SubsTableItemProps {
	email: IEmail;
	deleteEmail: (mongoId: string) => void;
}

export interface IBlog {
	_id: string;
	title: string;
	description: string;
	category: string;
	author: string;
	image: string;
	authorImg: string;
	date: Date;
	__v: number;
}

export interface IEmail {
	_id: string;
	email: string;
	date: Date;
	__v: number;
}

export interface IDataState {
	title: string;
	description: string;
	category: string;
	author: string;
	authorImg: string;
}
