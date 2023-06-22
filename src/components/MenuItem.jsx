import Link from 'next/link'
import React from 'react'


export default function MenuItem({title, address, Icon}) {
  return (
    <div className=''>
        
        <Link href={address} className="">
            <Icon className="text-2xl sm:hidden hover:text-orange-300"/>
            <h1 className='hover:text-orange-300 hidden sm:inline my-6 text-sm'>{title}</h1>
        
        </Link>
    </div>
  )
}
