import { PrintButton } from "@/components/print-button";



export default async function ReportCard({ params }: { params: Promise<{ studentId: string }> }) {
    
    const { studentId } = await params
    
   
  return (
    <div>
     <PrintButton/>
    <div className="bg-white p-8 w-full mx-auto shadow-xl print:shadow-none print:m-0">
      <div className="text-center border-b-2 pb-4 mb-6 border-black">
        <h4 className="text-3xl font-bold uppercase">Excelgrip Foundation School</h4>
        <p>Academic Report Sheet</p>
      </div>

      <div className="grid grid-cols-2 mb-6 text-sm">
        <div>
          <p><strong>NAME: </strong>Elueme Chidi Henry</p>
          <p><strong>LEVEL: </strong>JSS1</p>
        </div>
        <div className="text-right">
          <p><strong>SESSION: </strong>2025/2026</p>
          <p><strong>TERM: </strong>1st Term</p>
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
            {Array.from({ length: 10 }).map((_, i) => <tr key={i} className="text-center">
              <td className="border border-black p-2 text-left font-medium">Mathematics</td>
              <td className="border border-black p-2">30</td>
              <td className="border border-black p-2">60</td>
              <td className="border border-black p-2">90</td>
              <td className="border border-black p-2">A</td>
            </tr>)}
        </tbody>
      </table>

        <div className="grid grid-cols-2 gap-8 my-6">
          <table className="w-full border-collapse border border-black text-xs">
            <thead>
              <tr>
                <th>SKILL / ATTRIBUTE</th>
                <th>RATING (1-5)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td className="border border-black p-1">Punctuality</td>
                <td className="border border-black p-1 text-center">3</td></tr>
              <tr><td className="border border-black p-1">Neatness</td>
                <td className="border border-black p-1 text-center">3</td></tr>
              <tr><td className="border border-black p-1">Honesty</td>
                <td className="border border-black p-1 text-center">3</td></tr>
              <tr><td className="border border-black p-1">Sport</td><td className="border border-black p-1 text-center">3</td></tr>
            </tbody>
          </table>


          <div className="text-sm italic space-y-4">
            <div className="border-b border-black pb-2">
              <strong>Teacher's Remark:</strong><p>A good student with potential.</p>
            </div>
            <div>
              <strong>Principal's Remark:</strong><p>Recommended for promotion to JSS 2.</p>
            </div>
          </div>

        </div>  

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
      
    </div>
  )
}


function calaculateGrades(score: number) {
  if (score >= 75) return "A1";
  if (score >= 65) return "B2";
  if (score >= 50) return "C";
  return "F91"
}