"use client"

import { getClassGrades } from '@/lib/actions'
import { ChevronDownCircle } from 'lucide-react'
import Link from 'next/link'
import { useState } from 'react'
type DetailsType = {
    studentId: string;
    studentName: string;
    totalScore: string | null;
    average: number | null;
}[]

export default function ClassesPage() {
    const [details, setDetails] = useState<DetailsType>([])

    const [data, setData] = useState({
        class: "",
        term: ""
    })
    const handleClick = async () => {
        console.log(data)
        const res = await getClassGrades(data.class, data.term)
        if (res) {

            setDetails(res)
        }
    }

    console.log("Details expected", details)
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
                <table className='w-full text-sm text-zinc-700'>
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
                        </tr>
                    </thead>
                    <tbody>
                        {details.map((record, i) => (
                            <tr key={record.studentId} className='border-b border-zinc-200'>
                                <td className='text-left py-2 capitalize'>{i+1}.</td>
                                <td className='text-left py-2 capitalize'>
                                    <Link href={`/teacher/result/${record.studentId}`}>
                                        {record.studentName}
                                    </Link>
                                </td>

                                <td>{record.totalScore}</td>
                                <td>{record?.average}</td></tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    )
}
