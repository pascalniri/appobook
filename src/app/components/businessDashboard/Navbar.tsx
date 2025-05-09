import { CircleUserRound } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="w-full flex justify-between py-3 px-4 md:px-6 items-center mx-auto bg-white/40 border-b backdrop-blur-[3px] fixed top-0 z-50">
            <Link href="/">
                <Image src="/appobook logo.svg" alt="appobook logo" width={120} height={120} />
            </Link>
            <div className="flex items-center gap-2">
                <CircleUserRound strokeWidth={1.5} size={30}/>
                <span className="flex flex-col items-start text-sm">
                    <p>John Doe</p>
                    <p className="text-gray-500 font-thin">johndoe@gmail.com</p>
                </span>
            </div>
        </div>
    )
}