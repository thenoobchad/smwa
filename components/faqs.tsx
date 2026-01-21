"use client";

import { useEffect, useState } from "react";

import { Minus, Plus } from "lucide-react";

type ItemType = {
	id: number;
	title: string;
	content: string;
	isActive: boolean;
};

type FaqsType = ItemType[];

const faqs: FaqsType = [
	{
		id: 1,
		title: "what does excelgrid foundation school offer",
		content:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur delectus illum consequuntur? A ullam id maxime. Assumenda sapiente voluptatibus laudantium!",
		isActive: true,
	},
	{
		id: 2,
		title: "what programs do we run",
		content:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur delectus illum consequuntur? A ullam id maxime. Assumenda sapiente voluptatibus laudantium!",
		isActive: false,
	},

	{
		id: 3,
		title: "How are fees paid for the term",
		content:
			"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur delectus illum consequuntur? A ullam id maxime. Assumenda sapiente voluptatibus laudantium!",
		isActive: false,
	},
];
export const Faqs = () => {
	const [isActive, setIsActive] = useState(false);
	const [faqsArr, setFaqsArr] = useState(faqs);

	const handleExpand = (id: number) => {
		const updatedItem = faqs.map((item) => ({
			...item,
			isActive: item.id === id ? true : false,
		}));

		setFaqsArr(updatedItem);
	};

	return (
		<div className="flex flex-col">
			{faqsArr.map((item) => {
				return (
					<div
						key={item.id}
						className="flex gap-4  items-start">
						<button
							onClick={() => handleExpand(item.id)}
							className="p-2 mb-2 bg-blue-600/10 text-blue-900 flex h-fit">
							{item.isActive ?
								<Minus size={18} />
							:	<Plus size={18} />}
						</button>

						<div className="flex flex-col gap-2 bg-white">
							<h4 className="uppercase text-sm">{item.title}</h4>

							<p
								className={`pb-3 relative ${item.isActive ? "flex" : "hidden  transition-all delay-150"}`}>
								{item.content}
							</p>
						</div>
					</div>
				);
			})}
		</div>
	);
};
