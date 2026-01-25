// import { db } from "@/db";
// import { subjects, students } from "@/db/schema";
// import ScoreForm from "@/components/ScoreForm";


export default async function Page() {
  // Fetch everything the form needs
//   const allSubjects = await db.select().from(subjects);
    //   const allStudents = await db.select().from(students);
    const allSubjects = [
      { id: 1, name: "Mathematics" },
      { id: 2, name: "English" },
      { id: 3, name: "Biology" },
      { id: 4, name: "Chemistry" },
      { id: 5, name: "Physics" },
      { id: 6, name: "History" },
      { id: 7, name: "Geography" },
      { id: 8, name: "Computer Science" },
    ];
    const allStudents = [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Smith" },
      { id: 3, name: "Alice Johnson" },
      { id: 4, name: "Bob Brown" },
    ];

  return (
    <div className="p-10">
     hi there
    </div>
  );
}

