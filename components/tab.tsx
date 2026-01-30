"use client"


import {  ChevronRightCircle } from "lucide-react"
import { useState } from "react"


const tabs = [
    {
        name: "benefits",
        tab: "benefits",
        items: [
            {
                id: "b1",
                title: "Holistic Development",
                description: "We nurture emotional intelligence, physical health, and creative thinking alongside academic excellence."
            },
            {
                id: "b2",
                title: "Future-Ready Skills",
                description: "From speaking workshops to public speaking, students gain the skills needed for the job market."
            },
            {
                id: "b3",
                title: "Safe & Inclusive Environment",
                description: "A campus where every student feels seen and protected, with a high priority on mental well-being."
            },
           
        ]
        
    },
    {
        name: "why we standout",
        tab: "standout",
        items: [
            {
                id: "s1",
                title: "12:1 Student-Teacher Ratio",
                description: "Small class sizes ensure personalized attention and tailored support for every learning style."
            },
           
            {
                id: "s2",
                title: "Award-Winning Faculty",
                description: "85% of our educators hold advanced degrees and are leaders in their academic fields."
            },
            {
                id: "s3",
                title: "Customizable Paths",
                description: "Our curriculum adapts to the individual, allowing students to accelerate in areas of strength."
            }
        ]
    },
    {
        name: "How to get registered",
        tab: "register",
        items: [
            {
                id: "r1",
                step: 1,
                title: "Inquiry & Brochure",
                description: "Fill out our digital interest form to receive a prospectus and virtual tour link."
            },
          
           
            {
                id: "r4",
                step: 2,
                title: "Entrance Assessment",
                description: "A friendly evaluation to understand your child's current academic standing."
            },
            {
                id: "r5",
                step: 3,
                title: "Final Enrollment",
                description: "Secure your spot with the registration fee and attend orientation night."
            }
        ]
    },
]

export const Tab = () => {

    const [activeLink, setActiveLink] = useState("benefits")
  return (
      <div>
          <div className="flex gap-4 bg-zinc-100 p-2 px-3">
              {tabs.map((link, i) => (
                  <button key={i} onClick={() => setActiveLink(link.tab)} className={`${link.tab === activeLink && "font-bold"} uppercase`}>{link.name}</button>
              ))}
             
          </div>
          {
              activeLink === "benefits" ? <Benefits /> : activeLink === "standout" ? <Standout/> : <Register/>
          }
    </div>
  )
}

const Benefits = () => {

    const filterData = tabs.filter((item) => item.tab === "benefits")
    return <div className="flex gap-2">
        {filterData.map((data) => (
          
                
                <ul key={data.tab} className="p-4">{data.items.map(data => (
                    <li key={data.id} className="flex flex-col gap-1 py-2">
                        <div className="flex gap-2"><ChevronRightCircle size={18}/><strong>{data.title}</strong> </div><p>{data.description}</p>
                    </li>
                ))}
                </ul>
          
       ))}
    </div>
}

const Standout = () => {
    const filterData = tabs.filter((item) => item.tab === "standout")
    return <div className="flex gap-2">
        {filterData.map((data) => (


            <ul key={data.tab} className="p-4">{data.items.map(data => (
                <li key={data.id} className="flex flex-col gap-1 py-2">
                    <div className="flex gap-2"><ChevronRightCircle size={18} /><strong>{data.title}</strong> </div><p>{data.description}</p>
                </li>
            ))}
            </ul>

        ))}
    </div>
}

const Register = () => {
     const filterData = tabs.filter((item) => item.tab === "register")
    return <div className="flex gap-2">
        {filterData.map((data) => (
          
                
                <ul key={data.tab} className="p-4">{data.items.map(data => (
                    <li key={data.id} className="flex flex-col gap-1 py-2">
                        <div className="flex gap-2"><ChevronRightCircle size={18}/><strong>{data.title}</strong> </div><p>{data.description}</p>
                    </li>
                ))}
                </ul>
          
       ))}
    </div>
}




