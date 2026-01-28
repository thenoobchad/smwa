import { getScoreSheetData } from "@/lib/actions"


export default async function ReportCard({ params }: { params: Promise<{ studentId: string }> }) {
    
    const { studentId } = await params
    
    const data = await getScoreSheetData(studentId, "2024/2025")
  return (
    <div>page</div>
  )
}
