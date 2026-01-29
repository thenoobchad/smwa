"use client"

import { getClassGrades } from '@/lib/actions'
import { ChevronDownCircle } from 'lucide-react'
import { useState } from 'react'
type DetailsType = {
 
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

    console.log("Details expected",details)
  return (
      <div>
          <h4 className='py-3 flex gap-2 items-center'>
              Get Results for all Classes here <ChevronDownCircle size={20} className='animate-pulse'/>
          </h4>   
          <div className='grid grid-cols-2 gap-4 sm:grid-cols-2 text-sm md:grid-cols-3'>
              <div className='flex gap-3 p-1 items-center'>
                  <label htmlFor="class">Class</label>
                  <select name="class" id="" onChange={(e) => setData({...data, class: e.target.value})} className='bg-zinc-100 p-1'>
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
          <div>
              {details.map((record, i) => (
                  <li key={i}>{record.studentName} {record.totalScore} {record?.average}</li>
        ))}
          </div>
      </div>
  )
}
