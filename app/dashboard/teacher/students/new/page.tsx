"use client";
// import { enrollStudent } from "@/lib/actions";

export default function NewStudentPage() {
	return (
		<div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border">
			<h2 className="text-xl font-bold mb-4">Enroll New Student</h2>

			<form
				//   action={enrollStudent}

				className="space-y-4">
				<div>
					<label className="block text-sm font-medium mb-1">Full Name</label>
					<input
						name="name"
						required
						placeholder="e.g. John Doe"
						className="w-full p-2 border rounded-md"
					/>
				</div>

				<div>
					<label className="block text-sm font-medium mb-1">
						Assigned Class
					</label>
					<select name="currentClass" className="w-full p-2 border rounded-md">
						<option value="JSS1">JSS1</option>
						<option value="JSS2">JSS2</option>
						<option value="JSS3">JSS3</option>
					</select>
				</div>

				<button
					type="submit"
					className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
					Register Student
				</button>
			</form>
		</div>
	);
}
