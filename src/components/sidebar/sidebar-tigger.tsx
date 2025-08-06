"use client"
import { MenuIcon, X } from 'lucide-react'
import React, { useState } from 'react'
import SidebarContent from './sidebar-content'
import clsx from 'clsx'

function SideBarTrigger() {
    const [isOpen, setIsOpen] = useState(false)

    const sidebarClasses = clsx(
        "fixed top-0 left-0 h-screen z-40 transition-all md:z-0 md:relative md:block md:w-[23%] lg:w-[18%] p-4 overflow-y-auto  border-r bg-gray-300 dark:bg-gray-800 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full scrollbar-thumb-slate-700 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700",
        isOpen ? "block" : "hidden"
    )

    return (
        <>
            {/* Mobile Menu Button */}
            <button
                className="md:hidden px-2 z-50 fixed top-6 left-4 bg-gray-300 dark:bg-gray-800 rounded"
                onClick={() => setIsOpen(prev => !prev)}
            >
                {isOpen ? <X className='text-orange-400' /> : <MenuIcon className='text-orange-400' />}
            </button>

            {/* Sidebar */}
            <div className={sidebarClasses}>
                <SidebarContent />
            </div>
        </>
    )
}

export default SideBarTrigger
