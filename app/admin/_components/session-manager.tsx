"use client";

import { createActiveSession } from "@/lib/actions";
import { Calendar, CalendarHeart, Check, ToolCase } from "lucide-react";
import { resolve } from "path";
import { FormEvent, useState } from "react";


export const SessionManager = () => {

	const [error, setError] = useState<string| null>(null)
	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const formData = new FormData(e.currentTarget)
		const { success, message } = await createActiveSession(formData)
		
		if (!success) {
			setError(message as string)
		}

		new Promise((resolve) => setTimeout(() => {
			resolve(setError(null))
		}, 2000))


	};
	
	return (
		<div>
			<form
				onSubmit={handleSubmit}
				className="flex gap-2 my-4 w-full flex-col sm:flex-row items-center border border-zinc-700 rounded-xs p-4 py-6">
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
						<select
							name="term"
							className="flex gap-4 bg-zinc-100 w-full text-zinc-600">
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
			{error && <p className="text-sm w-fit bg-red-100 p-1  px-6 text-red-600">{error}</p>}
		</div>
	);
};
