"use client"

import { useState } from "react"


const tabs = [
    {
        name: "benefits",
        tab: "benefits",
        
    },
    {
        name: "why we standout",
        tab: "standout",
       
    },
    {
        name: "How to get registered",
        tab: "register",

    },
]

export const Tab = () => {

    const [activeLink, setActiveLink] = useState("benefits")
  return (
      <div>
          <div className="flex gap-4 bg-zinc-50 p-2">
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
    return <h1>benefits</h1>
}

const Standout = () => {
    return <h1>standout</h1>
}

const Register = () => {
    return <h1>register</h1>
}