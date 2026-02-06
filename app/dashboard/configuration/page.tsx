

export default function ConfigurationPage() {
  return (
      <div className='w-full flex flex-col'>
          <h4>Configurations</h4>
          <div className=' p-2 my-4 grid grid-cols-2 gap-2 border-y'>
              <div className='flex flex-col gap-2'>
                  <label htmlFor="session">Enter Session</label> 
                  <div className='bg-zinc-100 p-2'>
                      <input type="text" placeholder='Enter value e.g. 2020/2021' className='outline-none' />
                  </div>
              </div>

              <div className='flex flex-col gap-2'>
                  <label htmlFor="session">Set Session</label>
                  <div className='bg-zinc-100 p-2'>
                      <select className='outline-none w-full'>
                          <option value="">2021/2022</option>
                          <option value="">2022/2023</option>
                      </select>
                  </div>
              </div>
          </div>
      </div>
  )
}
