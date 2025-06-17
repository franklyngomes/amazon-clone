"use client"
import React, { ReactNode } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { usePathname } from 'next/navigation'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Toaster } from 'react-hot-toast'


const Provider = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname()
  const queryClient = new QueryClient()
  const signin = "/auth/signin"
  const signup = "/auth/signup"
  return (
    <>
      <QueryClientProvider client={queryClient}>
        {pathname === signin || pathname === signup ? null : <Header />}
        <Toaster/>
        {children}
        {pathname === signin || pathname === signup ? null : <Footer />}
      </QueryClientProvider>
    </>
  )
}

export default Provider