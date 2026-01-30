"use client"

import { getClassGrades } from '@/lib/actions'
import { ChevronDownCircle, Edit, Edit2, Edit3, FileEdit } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
type StudentGradeType = {
    studentId: string;
    studentName: string;
    totalScore: string | null;
    average: number | null;
}[]

export default function ClassesPage() {
    const [gradeDetails, setGradeDetails] = useState<StudentGradeType>([])

    const [data, setData] = useState({
        class: "",
        term: ""
    })
    const handleClick = async () => {
      
        const res = await getClassGrades(data.class, data.term)
        if (res) {

            setGradeDetails(res)
        }
    }

    return (
        <div>
            <h4 className='py-3 flex gap-2 items-center'>
                Get Results for all Classes here <ChevronDownCircle size={20} className='animate-pulse' />
            </h4>
            <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 text-sm md:grid-cols-3'>
                <div className='flex gap-3 p-1 items-center'>
                    <label htmlFor="class">Class</label>
                    <select name="class" id="" onChange={(e) => setData({ ...data, class: e.target.value })} className='bg-zinc-100 p-1'>
                        <option >-- Select Class --</option>
                        <option value="JSS1">JSS 1</option>
                        <option value="JSS2">JSS 2</option>
                        <option value="JSS3">JSS 3</option>
                    </select>
                </div>

                <div className='flex gap-3 p-1 items-center'>
                    <label htmlFor="class">Term</label>
                    <select name="class" id="" onChange={(e) => setData({ ...data, term: e.target.value })} className='bg-zinc-100 p-1'>
                        <option >-- Select Term --</option>
                        <option value="first">First Term</option>
                        <option value="second">Second Term</option>
                        <option value="third">Third Term</option>
                    </select>
                </div>
                <button onClick={handleClick} className='py-1.5 px-3 bg-blue-950 text-white'>Get Results</button>
            </div>
            <div className='my-6 w-full'>
                {gradeDetails && gradeDetails.length > 0 ?<table className='w-full text-sm text-zinc-700'>
                    <thead>
                        <tr className='border-b'>
                            <th className='text-left py-2'>
                                S/N
                            </th>
                            <th className='text-left py-2'>
                                Full Name
                            </th>
                            <th className='text-left py-2'>
                                Total Score
                            </th>
                            <th className='text-left py-2'>
                                Average
                            </th>
                            <th className='text-left py-2'>
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {gradeDetails.map((record, i) => (
                            <tr key={record.studentId} className='border-b border-zinc-200'>
                                <td className='text-left py-2 capitalize'>{i + 1}.</td>
                                <td className='text-left py-2 capitalize'>
                                    <Link href={`/teacher/result/${record.studentId}`} className='underline text-blue-800'>
                                        {record.studentName}
                                    </Link>
                                </td>

                                <td>{record.totalScore}</td>
                                <td>{record?.average}</td>
                                <td>
                                    <Link
                                        href={`/teacher/students/${record.studentId}/scores`}
                                        className=" text-yellow-600  cursor-pointer">
                                        <FileEdit size={18}/>
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table> : <div className='h-full w-full items-center justify-center'><p >Nothing to see here...</p></div>
                }
            </div>
        </div>
    )
}
