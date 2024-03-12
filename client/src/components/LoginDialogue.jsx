import React from 'react'
import { Link } from 'react-router-dom'

const LoginDialogue = ({ page_name }) => {
    return (
        <div className='flex flex-1 justify-center items-center min-h-screen' >
            <div className='flex flex-col h-80 w-2/3 rounded items-center  justify-center' >
                <h1 className='bg-gradient-to-r from-zinc-400 via-zinc-500 to-zinc-200 inline-block text-transparent bg-clip-text text-4xl tracking-wide opacity-80' >Hey ! You are loggedOut, Login to see {page_name}
                </h1>

                <Link to="/login" className='border border-zinc-700  mt-16 px-7 py-3    font-semibold text-xl rounded-lg' >Login</Link>
            </div>
        </div>
    )
}

export default LoginDialogue