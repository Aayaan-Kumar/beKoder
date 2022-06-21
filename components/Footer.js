import React from 'react'
import Link from 'next/link'

const Footer = () => {
    return (
        <div>

            <footer className="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-800">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Link href={'/'}><a className="flex items-center mb-2 sm:mb-0">
                        <div>
                            <p className='text-4xl text-purple-700 font-mono'>BeKoder</p>
                        </div>
                    </a></Link>
                    <ul className="flex flex-wrap items-center mb-3 font-medium text-base text-gray-700 sm:mb-0 dark:text-gray-400">
                        <li>
                            <Link href={'/projects'}><a className="mr-2 hover:text-black md:mr-6 ">Projects</a></Link>
                        </li>
                        <li>
                            <Link href={'/creativity'}><a className="mr-2 hover:text-black md:mr-6">Your Creativity</a></Link>
                        </li>
                        <li>
                            <Link href={'/about'}><a className="mr-2 hover:text-black md:mr-6 ">About</a></Link>
                        </li>
                        <li>
                            <Link href={'/contact'}><a className="hover:text-black">Contact</a></Link>
                        </li>
                    </ul>
                </div>
                <hr className="my-3 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <Link href={'/'}><a className="text-gray-700 hover:text-black">BeKoder</a></Link>. All Rights Reserved.
                </span>
            </footer>

        </div>
    )
}

export default Footer