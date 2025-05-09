'use client'

import { useState } from "react";
import { ChevronLeft, ChevronRight, LayoutGrid, Calendar, Briefcase, User } from "lucide-react";
import Link from "next/link"

export default function Sidebar() {

    const sideLinks = [
        {
            name: "Dashboard",
            href: "/dashboard",
            icon: <LayoutGrid strokeWidth={1.8} size={15} />
        },
        {
            name: "Appointments",
            href: "/appointments",
            icon: <Calendar strokeWidth={1.8} size={15} />
        },
        {
            name: "Services",
            href: "/services",
            icon: <Briefcase strokeWidth={1.8} size={15} />
        },
        {
            name: "Profile",
            href: "/profile",
            icon: <User strokeWidth={1.8} size={15} />
        },
    ];

    const [open, setOpen] = useState(false);
    const toggleSidebar = () => setOpen(!open);

    return (
        <div className={`relative top-16 bottom-0 bg-white/40  border text-sm p-4 flex flex-col items-center w-[250px] h-[calc(100vh-4rem)] ${open ? "w-[250px]" : "w-[80px]"}`}>
            <div className="flex flex-col items-center gap-2 w-full">
                {sideLinks.map((link) => (
                    <Link href={link.href} key={link.name} className={`flex items-center gap-2 flex justify-start  h-[40px] items-center border hover:bg-gray-100 transition-all ${open ? "w-full px-4" : "w-[40px] h-[40px] flex justify-center items-center"}`}>
                        {link.icon}
                        {open ? link.name : ""}
                    </Link>
                ))}
            </div>
            <button onClick={toggleSidebar} className="absolute top-0 -right-[20px] p-1 bg-white border border-l-none transition-all">
             { open ? <ChevronLeft strokeWidth={1.5} /> : <ChevronRight strokeWidth={1.5} />}
            </button>
            <div className="absolute right-0 bottom-4 border-t pt-4 w-full">
                <p className="text-center text-gray-500 font-thin">appobook v1.0.0</p>
            </div>
        </div>
    )
}