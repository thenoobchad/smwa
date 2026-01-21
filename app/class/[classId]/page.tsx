import { Header } from '@/components/header'
import React from 'react'

export default async function ClassPage({ params }: { params: Promise<{ classId: string }> }) {
    
    const { classId } = await params

    const className = (id: string) => {
        if (id === "jss1") return "JSS 1: Jade Scholars"
        if (id === "jss2") return "JSS 2: Sapharrie Explorers";
        if (id === "jss3") return "JSS 3: Pearl Elites";
    }
  return (
      <main className='p-2'>
          <Header/>
          <h4 className='text-center p-1 border-b border-zinc-300'>Welcome to {className(classId)}</h4>
    </main>
  )
}
