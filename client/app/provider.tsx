"use client"
import React, { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation'


const Provider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  console.log(pathname)
  const signin = "/auth/signin"
  const signup = "/auth/signup"
  return (
    <>
      {pathname === signin || pathname === signup ? null : <Header />}
      {children}
      {pathname === signin || pathname === signup ? null : <Footer />}
    </>
  )
}

export default Provider