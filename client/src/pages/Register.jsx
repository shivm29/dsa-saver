import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col font-Jost' >
            <form className=' flex flex-col border border-zinc-900 rounded-md p-7 w-1/3 min-w-50' >
                <h1 className=' my-7 mb-16 text-4xl text-bold bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200 inline-block text-transparent bg-clip-text' >Create a new Account</h1>
                <input className='font-light bg-transparent border border-zinc-800 focus:outline-none mb-4 px-4 py-2 rounded-md' type='text' placeholder="Tell us your pretty name .." />
                <input className='font-light bg-transparent border border-zinc-800 focus:outline-none mb-4 px-4 py-2 rounded-md' type='email' placeholder="Choose an email I;d" />
                <input className='font-light bg-transparent border border-zinc-800 focus:outline-none mb-4 px-4 py-2 rounded-md' type='password' placeholder="Create a strong password" />

                <button className='mt-6 border border-zinc-700 py-3 rounded-md w-28' type='submit' >Register</button>

                <div className='flex w-full mt-10 justify-end' >
                    <button> <span className='text-sm font-light' >Already have an Account? </span> <Link to="/login" className='font-medium' >Login here</Link></button>
                </div>
            </form>

        </div>
    )
}

export default Register