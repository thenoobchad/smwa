"use client";

import { Calendar, CalendarHeart, Check, ToolCase } from "lucide-react";
import { FormEvent } from "react";

const sessions = [
	{
		id: 1,
		name: "2000/2001",
		isCurrent: true,
	},
	{
		id: 2,
		name: "2001/2002",
		isCurrent: false,
	},
	{
		id: 3,
		name: "2002/2003",
		isCurrent: false,
	},
];
export const SessionManager = () => {
	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget)
		console.log(formData)
	};
	
	return (
		<form
			onSubmit={handleSubmit}
			className="flex gap-2 my-4 w-full flex-col sm:flex-row items-center">
			<section className=" grid grid-cols-2  gap-2 items-center text-sm w-full justify-center">
				<h3 className="whitespace-nowrap ">Academic Sessions:</h3>
				<div className=" p-2 bg-zinc-100  w-full flex">
					<input
						name="session"
						type="text"
						className="w-full outline-none"
						placeholder="e.g. 2024/2025"
					/>
					<Calendar size={18} className="text-zinc-400" />
				</div>
			</section>

			<section className=" grid grid-cols-2  gap-2 items-center text-sm w-full">
				<h3 className="whitespace-nowrap">Select Term:</h3>
				<div className=" p-2 bg-zinc-100  w-full flex gap-2">
					<ToolCase size={18} className="text-zinc-400" />
					<select name="term" className="flex gap-4 bg-zinc-100 w-full text-zinc-600">
						{["first", "second", "third"].map((term) => (
							<option value={term} key={term} className="px-6 py-2">
								{term.charAt(0).toUpperCase() + term.slice(1)} Term
							</option>
						))}
					</select>
				</div>
			</section>
			<button className="bg-blue-700 text-white py-2 whitespace-nowrap px-4 w-full font-bold text-sm">
				Set Session
			</button>
		</form>
	);
};
