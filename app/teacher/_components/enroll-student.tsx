"use client";

import { enrollStudent } from "@/lib/actions";
import {
	
	Calendar,
	CalendarSearch,
	Library,
	LogOut,
	UserCheck,
	
	UserPlus,
} from "lucide-react";
import { FormEvent, useState } from "react";

type SessionType = {
	id: string;
	term: "first" | "second" | "third"
	name: string,

}

export const EnrollStudent = ({ session }: { 
	session: SessionType }) => {

	
	const [isOpen, setIsOpen] = useState(false);

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget)
		console.log(formData)
		
		const { success } = await enrollStudent(formData)
		if (success) {
			setIsOpen(false)
		}
	};

	return (
		
			
				<div className="  w-full h-full flex items-center justify-center ">
					<form onSubmit={handleSubmit} className=" mx-2 bg-white flex flex-col gap-4 p-4  rounded-xs py-4 ">
						<div className="py-4 flex justify-between">
							<h4>Enter details</h4>
							
						</div>
						<div className="flex flex-col gap-2 text-sm">
							<label htmlFor="">
								Full Name <span className="text-red-600">*</span>
							</label>
							<div className="bg-zinc-100 p-2 flex text-zinc-500">
								<input
									type="text"
									name="fullName"
									placeholder="e.g. Oluwason Lawson"
									className="w-full"
								/>
								<UserPlus />
							</div>
						</div>
						<input name="session" defaultValue={session.id} type="text" hidden />
						<input hidden name="term" defaultValue={session.term} type="text" />

				<div className="flex gap-2">
						<div className="flex flex-col gap-2 text-sm w-full">
							<label htmlFor="">
								Class <span className="text-red-600">*</span>
							</label>
							<div className="bg-zinc-100 p-2 flex text-zinc-500">
								<select name="class" id="class" className="w-full">
									<option value="JSS1">JSS 1</option>
									<option value="JSS2">J.S.S. 2</option>
									<option value="JSS3">J.S.S. 3</option>
								</select>
								<Library />
							</div>
					</div>

					<div className="flex flex-col gap-2 text-sm w-full">
						<label htmlFor="">
							Active Session <span className="text-red-600">*</span>
						</label>
						<div className="bg-zinc-100 p-2 flex text-zinc-500 justify-between">
							<p className="py-0.5">{session.name}</p>
							<Calendar size={18}/>
						</div>
					</div>

				</div>

						<button className="bg-blue-950 p-2 text-white mt-4 text-sm">Add New Student</button>
					</form>
				</div>

	);
};
