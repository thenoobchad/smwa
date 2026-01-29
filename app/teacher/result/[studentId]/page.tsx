

export default async function Result({ params }: { params: Promise<{ studentId: string }> }) {

  const {studentId} = await params
  return (
    <div>page
      {studentId}
    </div>
  )
}

