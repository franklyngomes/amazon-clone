import Link from 'next/link'
import React from 'react'

const Signup = () => {
  return (
   <div className='flex justify-center mt-[5%]'>
      <div className="form border border-[#a9a9a9] p-5 rounded-md bg-white pb-[50px] sm:mx-4">
        <h4 className='text-[#0f1111] text-[28px] pb-3'>Sign up to get started
        </h4>
        <form action="post" className='flex flex-col justify-center gap-3 max-w-[320px] w-full flex-1'>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700"
              placeholder=""
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700"
              placeholder=""
            />
          </div>
          <button type="submit" className="bg-[#ffd814] px-2.5 py-1.5 rounded-full w-full cursor-pointer hover:bg-[#f7ca00]">Sign up</button>
          <p className='text-[14px]'>Already have an account? <Link href={"/auth/signin"}><span className='hover:underline text-blue-500 cursor-pointer'>Signin</span></Link></p>
        <p className='text-[12px] text-wrap'>By continuing, you agree to Amazon’s <span className='hover:underline text-blue-500 cursor-pointer'>Conditions of Use</span>, <span className='hover:underline text-blue-500 cursor-pointer'>Privacy Notice</span>, and the <span className='hover:underline text-blue-500 cursor-pointer'>Amazon Business Terms and Conditions</span>.</p>
        </form>
      </div>
    </div>
  )
}

export default Signup