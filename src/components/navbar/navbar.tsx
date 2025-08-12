import { Search } from 'lucide-react'
import React from 'react'
import { Input } from '../ui/input'

import FullscreenButton from './screen-button'
import Profile from './profile'

function Navbar() {
    return (
        <div className='flex items-center justify-end md:justify-between px-4 p-4 shadow-lg'>
            {/* SEARCH BAR */}
            <div className="hidden relative md:flex items-center justify-around">
                <Search size={18} className='text-orange-400 absolute left-1' />
                <Input type='text' placeholder='search...' className='border-orange-400 outline-amber-500 h-8 pl-8' />
            </div>
            <div className='flex md:hidden  w-full justify-center'>
                <h1 className='text-lg font-bold'>
                    <span className='text-lg text-primary'>A1 Solutions</span>
                </h1>
            </div>

            {/* icons and profile */}
            <div className='flex items-center gap-3'>
                <FullscreenButton />
                <Profile />
            </div>
        </div>
    )
}

export default Navbar