


export default async function ReportCard({ params }: { params: Promise<{ studentId: string }> }) {
    
    const { studentId } = await params
    
   
  return (
    <div className="bg-white p-8 w-full mx-auto shadow-xl print:shadow-none print:m-0">
      <div>
        <h4>Excelgrip Foundation School</h4>
        <p>Academic Report Sheet</p>
      </div>

      <div className="grid grid-cols-2 mb-6 text-sm">
        <div>
          <p><strong>NAME:</strong>Elueme Chidi Henry</p>
          <p><strong>LEVEL:</strong>JSS1</p>
        </div>
        <div className="text-right">
          <p><strong>SESSION:</strong>2025/2026</p>
          <p><strong>TERM:</strong>1st Term</p>
        </div>
      </div>

      <table className="w-full border-collapse border border-black mb-6">
        <thead>
          <tr className="bg-gray-200">
            <th>SUBJECT</th>
            <th>TEST</th>
            <th>EXAM</th>
            <th>TOTAL</th>
            <th>GRADE</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border border-black p-2 text-left font-medium">Mathematics</td>
            <td className="border border-black p-2">30</td>
            <td className="border border-black p-2">60</td>
            <td className="border border-black p-2">90</td>
            <td className="border border-black p-2">A</td>
          </tr>
        </tbody>
      </table>

      <div className="grid grid-cols-3 gap-4 border-t-2 border-black pt-4">
        <div className="text-center">
          <p className="text-xs uppercase">Total Score</p>
          <p className="text-xl font-bold">378</p>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase">Position</p>
          <p className="text-xl font-bold">1ST of 29</p>
        </div>
        <div className="text-center">
          <p className="text-xs uppercase">Desicion</p>
          <p className="text-xl font-bold text-green-700">PASSED</p>
        </div>
      </div>
    </div>
  )
}


function calaculateGrades(score: number) {
  if (score >= 75) return "A1";
  if (score >= 65) return "B2";
  if (score >= 50) return "C";
  return "F91"
}