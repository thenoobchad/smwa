
import { EnrollStudent } from '../../_components/enroll-student'
import { getActiveSession } from '@/lib/queries'

export default async function EnrollmentPage() {

  const [session] = await getActiveSession() || []

  return (
    <div>Enrollment Page

      <EnrollStudent session={session}/>
    </div>
  )
}
