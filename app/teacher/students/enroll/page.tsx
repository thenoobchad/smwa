
import { ArrowLeft } from 'lucide-react'
import { EnrollStudent } from '../../_components/enroll-student'
import { getActiveSession } from '@/lib/queries'
import Link from 'next/link'

export default async function EnrollmentPage() {

  const [session] = await getActiveSession() || []

  return (
    <div className='flex w-full h-full items-center justify-center flex-col'>
      <div className='w-full py-2 grid grid-cols-3 bg-blue-700 text-white px-2 items-center' >
        <Link href="/teacher"><ArrowLeft size={18} /></Link><p className='text-center'>Add New Student</p> </div>

      <EnrollStudent session={session}/>
    </div>
  )
}
