import Navbar from "@/components/navbar/navbar";
import Menu from "@/components/sidebar/menu";
import SideBarTrigger from "@/components/sidebar/sidebar-tigger";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="h-screen flex relative">
            {/* LEFT */}
            {/* <div className=" absolute z-10 md:z-0 md:relative h-screen md:block md:w-[23%] lg:w-[18%]  p-4 border-r-1 border-gray-200 dark:border-gray-700 bg-gray-300 dark:bg-gray-800 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-slate-700 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 overflow-y-auto shadow">
                <X className="block md:hidden"/>
                <Link href="/" className="flex items-center justify-center">
                    <Image src="/logo.png" alt="logo" width={100} height={100} />
                </Link>
                <Menu />
            </div> */}
            <SideBarTrigger />
            {/* RIGHT */}
            <div className="w-[100%] md:w-[77%] lg:w-[82%] bg-gray-300 dark:bg-gray-800 scrollbar-thin scrollbar-thumb-rounded-full scrollbar-track-rounded-full  scrollbar-thumb-slate-700 scrollbar-track-slate-300 dark:scrollbar-thumb-slate-300 dark:scrollbar-track-slate-700 overflow-y-auto">

                <Navbar />
                <div className="p-4">
                    {children}
                </div>
            </div>
        </div>
    );
}
