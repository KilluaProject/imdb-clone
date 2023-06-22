import React from 'react'
import MenuItem from './MenuItem'
import {AiFillHome} from 'react-icons/ai'
import {AiFillAliwangwang} from 'react-icons/ai'
import Link from 'next/link'

export default function () {
  return (
    <div className='flex justify-between mx-auto item-center max-w-6xl sm:max-auto py-5 px-2 bg-slate-100'>
        <div className="flex gap-7">
            <MenuItem title="Home" address="/" Icon={AiFillHome}/>
            <MenuItem title="About" address="/about" Icon={AiFillAliwangwang}/>
        </div>
        <div className="">
          <Link href="/">
          <h1 className='text-2xl'>
            <span className=' mr-2 font-bold bg-orange-400 rounded-lg py-1 px-2'>
              IMdb
            </span>
            <span className='text-xl hidden sm:inline'>
              Clone
            </span>
          </h1>
          
          </Link>
        </div>
    </div>
  )
}
