"use client"
import React, { ReactNode, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import clsx from 'clsx'
import { ChevronRight, ChevronDown } from "lucide-react";


interface SidebarLinkProps {
    href: string;
    icon: ReactNode;
    label: string;
    nested?: SidebarLinkProps[]
    classname?: string
}

function SidebarLink({ href, icon, label, nested, classname }: SidebarLinkProps) {
    const pathName = usePathname();
    const isActive = pathName == href;
    const [isOpen, setIsOpen] = useState(false)
    const baseClasses = clsx(`flex items-center cursor-pointer
                    justify-start gap-4 p-2 rounded-lg transition-colors hover:bg-primary w-full`, isActive ? "bg-primary" : "", classname)


    if (nested && nested.length > 0) {
        return (
            <div className=''>
                <button className={clsx(baseClasses)}
                    onClick={() => setIsOpen(prev => (!prev))}
                >
                    <div className='flex items-center gap-4'>
                        {icon}
                        <span>{label}</span>
                    </div>
                    {
                        isOpen ? <ChevronDown className="w-4 h-4" /> : <ChevronRight className="w-4 h-4" />
                    }
                </button>
                {isOpen && (
                    <div className="ml-3 mt-1 flex flex-col gap-1">
                        {nested.map(child => (
                            <SidebarLink key={child.label} {...child} />
                        ))}
                    </div>
                )}
            </div>

        )
    }

    return (

        <Link
            href={href}
            className={baseClasses}
        >
            {icon}
            <span>{label}</span>

        </Link>


    )
}

export default SidebarLink