import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
    return (
        <div className='w-full h-screen flex justify-center items-center flex-col font-Jost' >
            <form className=' flex flex-col border border-zinc-900 rounded-md p-7 w-1/3 min-w-50' >
                <h1 className=' my-7 mb-16 text-4xl text-bold bg-gradient-to-r from-zinc-200 via-zinc-500 to-zinc-200 inline-block text-transparent bg-clip-text' >Login to your Account</h1>
                <input className='font-light bg-transparent border border-zinc-800 focus:outline-none mb-4 px-4 py-2 rounded-md' type='email' placeholder="Enter your email" />
                <input className='font-light bg-transparent border border-zinc-800 focus:outline-none mb-4 px-4 py-2 rounded-md' type='password' placeholder="Enter your password" />

                <button className='mt-6 border border-zinc-700 py-3 rounded-md w-28' type='submit' >login</button>

                <div className='flex w-full mt-10 justify-end' >
                    <button> <span className='text-sm font-light' >Dont have an account? </span> <Link to="/register" className='font-medium' >Register here</Link></button>
                </div>
            </form>

        </div>
    )
}

export default Login