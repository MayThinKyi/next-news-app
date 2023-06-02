import Link from 'next/link'
import React from 'react'
import CategoriesDropDown from './CategoriesDropDown'

const Navbar = () => {
  return (
    <div className='py-8 bg-[#000] text-lg sm:text-xl text-white font-semibold flex flex-wrap sm:flex-nowrap items-center gap-5 sm:gap-10 px-5 sm:px-10 lg:px-20'>
        <Link href={'/'} >Breaking News</Link>
        <Link href={'/search'} >Search</Link>
        <CategoriesDropDown/>

    </div>
  )
}

export default Navbar