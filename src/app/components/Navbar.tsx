"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { GradOutline } from "./Gradoutline";

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
        <div className="group relative w-min mx-auto h-[5vh] z-20">
            <GradOutline />
            <div className="relative flex justify-center gap-8 px-10 py-2 text-xs bg-black rounded-md gsmContainer sm:gap-12 md:text-lg">
                <Link
                    className={`font-normal ${
                        activeIndex == 0
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="/"
                >
                    Home
                </Link>
                <Link
                    className={`font-normal ${
                        activeIndex == 1
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="about"
                >
                    About
                </Link>
                <Link
                    className={`font-normal ${
                        activeIndex == 2
                            ? "bg-gradient-to-r from-purple-800 to-indigo-600 bg-clip-text text-transparent"
                            : "hover:-translate-y-[2px] transition-all"
                    }`}
                    href="projects"
                >
                    Projects
                </Link>
                <Link
                    className={`font-normal ${
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
