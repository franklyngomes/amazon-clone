"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SignInQuery } from '@/api/query/query'
import { useRouter } from 'next/navigation'
import toast from 'react-hot-toast'

const schema = yup.object({
  email: yup.string().email().required("Email is required").max(160),
  password: yup.string().required("Password cannot be blank").min(5).max(15),
});
const Login = () => {
  const { mutateAsync } = SignInQuery()
  const router = useRouter()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = (data) => {
    const { email, password } = data
    const formdata = new FormData()
    formdata.append("email", email)
    formdata.append("password", password)
    mutateAsync(formdata, {
      onSuccess: (res) => {
        if (res?.status === true) {
          reset();
          toast.success(res?.message);
          router.push("/");
        }else{
          toast.error(res?.response?.data?.message);
        }
      } 
    })
  }
  return (
    <div className='flex justify-center mt-[5%]'>
      <div className="form border border-[#a9a9a9] p-5 rounded-md bg-white pb-[50px] sm:mx-4">
        <h4 className='text-[#0f1111] text-[28px] pb-3'>Sign in to get started
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center gap-3 max-w-[320px] w-full flex-1'>
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="text"
              name="email"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700"
              placeholder=""
            />
            {errors.email && typeof errors.email.message === "string" && (
              <div className='flex gap-1'>
                <img src="/assets/alert.png" alt="Alert" className='mt-1 w-7' />
                <p className='text-red-600 m-0 text-[12px] pt-2'>
                  {errors.email.message}
                </p>
              </div>
            )}
          </div>
          <div>
            <div className='flex justify-between'>
              <label htmlFor="password">Password</label>
              <Link href={"/forgot-password"}><p className='font-thin text-blue-500'>Password assistance</p></Link>
            </div>
            <input
              {...register("password")}
              type="password"
              name="password"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700"
              placeholder=""
            />
            {errors.password && typeof errors.password.message === "string" && (
              <div className='flex gap-1'>
                <img src="/assets/alert.png" alt="Alert" className='mt-1 w-7' />
                <p className='text-red-600 m-0 text-[12px] pt-2'>
                  {errors.password.message}
                </p>
              </div>
            )}
          </div>
          <button type="submit" className="bg-[#ffd814] px-2.5 py-1.5 rounded-full w-full cursor-pointer hover:bg-[#f7ca00]">Sign in</button>
          <p className='text-[14px]'>Don&apos;t have an account? <Link href={"/auth/signup"}><span className='hover:underline text-blue-500 cursor-pointer'>Signup</span></Link></p>
          <p className='text-[12px] text-wrap'>By continuing, you agree to Amazon’s <span className='hover:underline text-blue-500 cursor-pointer'>Conditions of Use</span>, <span className='hover:underline text-blue-500 cursor-pointer'>Privacy Notice</span>, and the <span className='hover:underline text-blue-500 cursor-pointer'>Amazon Business Terms and Conditions</span>.</p>
        </form>
      </div>
    </div>
  )
}

export default Login