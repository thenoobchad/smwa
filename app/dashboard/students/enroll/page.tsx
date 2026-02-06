

import { EnrollStudent } from '../../_components/enroll-student'
import { getActiveSession } from '@/lib/queries'


export default async function EnrollmentPage() {

  const session = await getActiveSession() 
  if (!session || session.length === 0) return <div>No active session found. Please set the current academic session first.</div>
  
  const activeSession = session[0]

  return (
    <div className='flex w-full h-full items-center justify-center flex-col gap-3 py-2'>
      

      <EnrollStudent session={activeSession}/>
    </div>
  )
}
