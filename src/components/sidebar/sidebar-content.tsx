import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Menu from './menu'

function SidebarContent() {
    return (
        <>
            <Link href="/" className="flex items-center justify-center">
                <Image src="/logo.png" alt="logo" width={100} height={100} />
            </Link>
            <Menu />
        </>
    )
}

export default SidebarContent