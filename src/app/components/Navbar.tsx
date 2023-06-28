"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const paths = new Map<string, number>([
    ["/", 0],
    ["/about", 1],
    ["/projects", 2],
    ["/connect", 3],
]);

export function Navbar() {
    const pathName = usePathname();
    const [activeIndex, setActiveIndex] = useState<number>(0);

    useEffect(() => {
        setActiveIndex(paths.get(pathName)!);
    }, [pathName]);

    return (
        <div className="group relative w-full sm:w-min h-[5vh]">
            <div className="absolute group-hover:-inset-[.5px] group-hover:duration-[2s] bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-10"></div>
            <div className="absolute inset-0 bg-[#121212]"></div>
            <div className="relative gsmContainer flex justify-center gap-8 sm:gap-12 py-2 px-10 rounded-md ring-[0.3px] bg-black text-xs md:text-lg">
                <Link
                    className={`font-semibold ${
                        activeIndex == 0
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`font-semibold ${
                        activeIndex == 1
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="about"
                >
                    About
                </Link>
                <Link
                    className={`font-semibold ${
                        activeIndex == 2
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="projects"
                >
                    Projects
                </Link>
                <Link
                    className={`font-semibold ${
                        activeIndex == 3
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="connect"
                >
                    Connect
                </Link>
            </div>
        </div>
    );
}
