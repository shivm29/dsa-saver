import React from 'react'
import { Link } from 'react-router-dom'

const Template = ({ children }) => {
    return (
        <div className='flex w-full h-full min-h-screen box-border text-sm font-Jost font-normal' >
            {/* Sidebar :  */}
            <div className='flex w-56  border-r  border-zinc-900 h-screen box-border p-5 justify-between flex-col tracking-wide' >
                <div>
                    <h4>Hey shivam!</h4>

                    <div className="flex flex-col w-full mt-16 tracking-wide">
                        <Link className='p-3 mb-2 flex w-full tracking-wide items-center' to="/" ><i class="fa-solid fa-tags"></i> &nbsp; tags</Link>
                        <Link to="/your-progress" className='p-3 mb-2 flex w-full tracking-wide' ><i class="fa-solid fa-chart-line items-center"></i> &nbsp; your_progress</Link>
                        <Link to="/history" className='p-3 mb-2 flex w-full tracking-wide items-center' ><i class="fa-solid fa-clock-rotate-left"></i> &nbsp; history</Link>
                        <Link to="/to-revise" className='p-3 mb-2 flex w-full tracking-wide items-center' ><i class="fa-regular fa-note-sticky"></i> &nbsp; to_revise</Link>
                    </div>
                </div>
                <div>
                    <button className='text-red-500 flex items-center' ><i class="fa-solid fa-power-off"></i> &nbsp;  dont_logout!</button>
                </div>
            </div>

            <div className='flex flex-1  min-h-screen' > {children} </div>
        </div>
    )
}

export default Template