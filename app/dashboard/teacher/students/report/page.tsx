// import { getStudentReportData } from "@/lib/queries";

const data = {
  totalClass: 40,
  totalStudents: 100,
  position: 5,
  scores: [
    {
      id: 1,
      subjectId: "Mathematics",
      testScore: 35,
      examScore: 50,
      totalScore: 85
    },
    {
      id: 2,
      subjectId: "English",
      testScore: 40,
      examScore: 55,
      totalScore: 95
    },
    {
      id: 3,
      subjectId: "Science",
      testScore: 30,
      examScore: 45,
      totalScore: 75
    },
    {
      id: 4,
      subjectId: "Social Studies",
      testScore: 45,
      examScore: 60,
      totalScore: 105
    },
    {
      id: 5,
      subjectId: "Physical Education",
      testScore: 50,
      examScore: 65,
      totalScore: 115
    },
    {
      id: 6,
      subjectId: "Art",
      testScore: 55,
      examScore: 70,
      totalScore: 125
    },
    {
      id: 7,
      subjectId: "Music",
      testScore: 60,
      examScore: 75,
      totalScore: 135
    },
    {
      id: 8,
      subjectId: "Computer Science",
      testScore: 65,
      examScore: 80,
      totalScore: 145
    }
  ]
}

export default async function ReportPage({ searchParams }: { searchParams: { id: string } }) {
//   const data = await getStudentReportData(Number(searchParams.id), "2023/2024");

  // Calculate Average
  const grandTotal = data.scores.reduce((sum, s) => sum + (s.totalScore || 0), 0);
  const average = (grandTotal / 8).toFixed(2);
 
 
  return (
    <div className="max-w-4xl mx-auto my-10 p-10 bg-white border-2 border-gray-100 shadow-2xl rounded-sm print:shadow-none">
      {/* School Header */}
      <div className="text-center mb-10 border-b-2 border-blue-600 pb-6">
        <h1 className="text-3xl font-black text-blue-800 uppercase">Excel Academy</h1>
        <p className="italic text-gray-500">Motto: Knowledge is Power</p>
      </div>

      {/* Student Info Bar */}
      <div className="grid grid-cols-2 gap-4 mb-8 text-sm">
        <div className="space-y-1">
          <p><strong>STUDENT NAME:</strong> John Doe</p>
          <p><strong>CLASS:</strong> JSS 1 Gold</p>
        </div>
        <div className="text-right space-y-1">
          <p><strong>SESSION:</strong> 2023/2024</p>
          <p><strong>TERM:</strong> First Term</p>
        </div>
      </div>

      {/* The 8 Subjects Table */}
      <table className="w-full border-collapse border border-gray-300">
        <thead className="bg-blue-50">
          <tr>
            <th className="border p-2 text-left">Subject</th>
            <th className="border p-2">Test (40)</th>
            <th className="border p-2">Exam (60)</th>
            <th className="border p-2">Total (100)</th>
            <th className="border p-2">Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.scores.map((s) => (
            <tr key={s.id} className="text-center">
              <td className="border p-2 text-left font-medium">{s.subjectId}</td>
              <td className="border p-2">{s.testScore}</td>
              <td className="border p-2">{s.examScore}</td>
              <td className="border p-2 font-bold">{s.totalScore}</td>
              <td className="border p-2">{getGradeLetter(s.totalScore)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Results Summary */}
      <div className="mt-8 grid grid-cols-3 gap-0 border text-center font-bold">
        <div className="p-4 border-r bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">GRAND TOTAL</p>
          <p className="text-2xl">{grandTotal} / 800</p>
        </div>
        <div className="p-4 border-r">
          <p className="text-xs text-gray-500 mb-1">AVERAGE</p>
          <p className="text-2xl text-blue-700">{average}%</p>
        </div>
        <div className="p-4 bg-gray-50">
          <p className="text-xs text-gray-500 mb-1">CLASS POSITION</p>
          <p className="text-2xl text-green-700">{data.position} out of {data.totalClass}</p>
        </div>
      </div>
      
      <button 
        onClick={() => window.print()} 
        className="mt-10 w-full bg-gray-800 text-white py-2 rounded print:hidden"
      >
        Print Report Card
      </button>
    </div>
  );
}

function getGradeLetter(score: number | null) {
  if (!score) return "-";
  if (score >= 75) return "A";
  if (score >= 60) return "B";
  if (score >= 45) return "C";
  return "F";
}


