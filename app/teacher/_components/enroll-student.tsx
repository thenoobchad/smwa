"use client";

import { enrollStudent } from "@/lib/actions";
import {
	
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
console.log(session.id)
	return (
		<>
			<button
				onClick={() => setIsOpen(true)}
				className="bg-blue-100 p-1 px-2 text-blue-700 flex gap-2">
				<UserCheck />
				Enroll Student
			</button>
			{isOpen && (
				<div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-20 backdrop-blur-xs">
					<form onSubmit={handleSubmit} className="w-[70vh] bg-white flex flex-col gap-4 p-4 border rounded-xs py-4 relative z-90">
						<div className="py-4 flex justify-between">
							<h4>Enter details</h4>
							<LogOut onClick={() => setIsOpen(false)} />
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

						<div className="flex flex-col gap-2 text-sm">
							<label htmlFor="">
								Class <span className="text-red-600">*</span>
							</label>
							<div className="bg-zinc-100 p-2 flex text-zinc-500">
								<select name="class" id="class" className="w-full">
									<option value="JSS1">J.S.S. 1</option>
									<option value="JSS2">J.S.S. 2</option>
									<option value="JSS3">J.S.S. 3</option>
								</select>
								<Library />
							</div>
						</div>
						<button className="bg-blue-950 p-2 text-white mt-4">Submit</button>
					</form>
				</div>
			)}
		</>
	);
};
