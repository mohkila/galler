import { PersonStanding } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center px-8 py-4 mt-5'>
        <div>
            <Link className='text-5xl font-extrabold hover:text-red-800 transition-all duration-300'  href={'/'}>TEST</Link>
        </div>
        <div className='flex gap-4 items-center font-extrabold hover:text-red-800 transition-all duration-300 cursor-pointer'>
            <PersonStanding size={40}/>
            <p className='text-xl font-extrabold hover:text-red-800 transition-all duration-300 cursor-pointer'>
            Login
            </p>

        </div>
    </div>
  )
}

export default Header