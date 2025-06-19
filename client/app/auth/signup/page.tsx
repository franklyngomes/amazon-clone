"use client"
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { SignUpQuery } from '@/api/query/query'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import Image from 'next/image'

const schema = yup.object({
  name: yup.string().required("Name is required").min(3).max(20),
  email: yup.string().email().required("Email is required").max(160),
  password: yup.string().required("Password cannot be blank").min(5).max(15),
});

const Signup = () => {
  const { mutateAsync } = SignUpQuery()
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
    const { name, email, password } = data
    const formdata = new FormData()
    formdata.append("name", name)
    formdata.append("email", email)
    formdata.append("password", password)
    mutateAsync(formdata, {
      onSuccess: (res) => {
        if (res?.status === true) {
          reset();
          toast.success(res?.message);
          router.push("/auth/signup");
        } else {
          toast.error(res?.response?.data?.message);
        }
      }
    })
  }
  return (
    <div className='flex flex-col items-center justify-center mt-[3%]'>
      <Image src={"/assets/amazon_logo_light.webp"} alt="Logo" className="logo mb-3" height={47} width={130} />
      <div className="form border border-[#a9a9a9] p-5 rounded-md bg-white pb-[50px] sm:mx-4">
        <h4 className='text-[#0f1111] text-[28px] pb-3'>Sign up to get started
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col justify-center gap-3 max-w-[320px] w-full flex-1'>
          <div>
            <label htmlFor="name">Full Name</label>
            <input
              {...register("name")}
              type="text"
              name="name"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700 font-normal"
              placeholder=""
            />
            {errors.name && typeof errors.name.message === "string" && (
              <div className='flex gap-1'>
                <img src="/assets/alert.png" alt="Alert" className='mt-1 w-7' />
                <p className='text-red-600 m-0 text-[12px] pt-2'>
                  {errors.name.message}
                </p>
              </div>
            )}
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email")}
              type="text"
              name="email"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700 font-normal"
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
            <label htmlFor="password">Password</label>
            <input
              {...register("password")}
              type="password"
              name="password"
              className="w-full bg-white rounded-sm h-8 px-3 border border-[#a9a9a9] outline-blue-700 font-normal"
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
          <button type="submit" className="bg-[#ffd814] px-2.5 py-1.5 rounded-full w-full cursor-pointer hover:bg-[#f7ca00]">Sign up</button>
          <p className='text-[14px]'>Already have an account? <Link href={"/auth/signin"}><span className='hover:underline text-blue-500 cursor-pointer'>Signin</span></Link></p>
          <p className='text-[12px] text-wrap'>By continuing, you agree to Amazon’s <span className='hover:underline text-blue-500 cursor-pointer'>Conditions of Use</span>, <span className='hover:underline text-blue-500 cursor-pointer'>Privacy Notice</span>, and the <span className='hover:underline text-blue-500 cursor-pointer'>Amazon Business Terms and Conditions</span>.</p>
        </form>
      </div >
    </div >
  )
}

export default Signup