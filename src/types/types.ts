import { StaticImageData } from "next/image";

export interface BlogItemProps {
	title: string;
	description: string;
	category: string;
	image: string | StaticImageData;
}
