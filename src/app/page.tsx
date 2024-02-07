import Dashboard from '@/components/account/dashboard'
import Login from '@/components/auth/login'
import OTP from '@/components/auth/otp'
import Navbar from '@/components/navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Navbar />
      <Login />
    </div>
  )
}
