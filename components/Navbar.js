import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { MdOutlineAccountCircle } from 'react-icons/md'

const Navbar = () => {
    return (
        <div className='flex flex-col md:flex-row items-center mb-1 shadow-md'>
            <div className='mx-5 my-3 '>
                <Link href={'/'}><a>
                    <div>
                        <p className='text-4xl text-purple-700 font-mono'>BeKoder</p>
                    </div></a>
                </Link>
            </div>
            <div className='nav justify-right'>
                <ul className='flex space-x-6 font-semibold ml-5'>
                    <Link href={'/projects'}><a><li className='text-gray-700 hover:text-black'>Projects</li></a></Link>
                    <Link href={'/creativity'}><a><li className='text-gray-700 hover:text-black'>Your Creativity</li></a></Link>
                    <Link href={'/contact'}><a><li className='text-gray-700 hover:text-black'>Contact</li></a></Link>
                    <Link href={'/about'}><a><li className='text-gray-700 hover:text-black'>About</li></a></Link>
                </ul>
            </div>
        </div>
    )
}

export default Navbar;