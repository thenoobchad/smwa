"use client"

export const PrintButton = () => {
  return (
    <button
      onClick={() => window.print()}
      className="print:hidden mb-6 bg-black text-white px-4 py-2">Print Report Card</button>
  )
}
