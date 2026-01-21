"us client"

import { useState } from 'react'
import { StudentDetails } from './student-details'

export const StudentsList = () => {
const [students, setStudents] = useState([])
  return (
    <div>Student List

      <StudentDetails/>
    </div>
  )
}
